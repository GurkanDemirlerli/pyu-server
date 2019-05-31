"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const ioc_1 = require("../../ioc");
const app_error_1 = require("../../errors/app-error");
const dtos_1 = require("@models/dtos");
const base_status_enum_1 = require("@enums/base-status.enum");
const task_entity_1 = require("@entities/task.entity");
let TaskService = class TaskService {
    constructor(_taskRepository, _projectRepository) {
        this._taskRepository = _taskRepository;
        this._projectRepository = _projectRepository;
    }
    add(model) {
        return new Promise((resolve, reject) => {
            let firstStatus;
            this.validateAuthority(model.projectId, model.creatorId).then(() => {
                return this._projectRepository.findOne(model.projectId, { relations: ["statuses"] });
            }).then((res) => {
                if (!res)
                    throw new app_error_1.AppError('AppError', 'Böyle bir proje yok.', 404);
                let prjct = res;
                let plannings = prjct.statuses.filter((sts) => sts.baseStatus === base_status_enum_1.BaseStatus.PLANNINING);
                //TODO task eklenirken statusId de alınsın
                firstStatus = plannings[0];
                for (let i = 0; i < plannings.length; i++) {
                    if (plannings[i].order < firstStatus.order)
                        firstStatus = plannings[i];
                }
                let task = Object.assign(new task_entity_1.TaskEntity(), model, { statusId: firstStatus.id });
                return this._taskRepository.insert(task);
            }).then((res) => {
                resolve(res.id);
            }).catch((err) => {
                reject(err);
            });
        });
    }
    list(filters, requestorId) {
        return __awaiter(this, void 0, void 0, function* () {
            let taskDtos = [];
            yield this.validateAuthority(filters.projectId, requestorId);
            let tasks = yield this._taskRepository.listByFilters(filters);
            tasks.map((tsk) => {
                let taskDto = Object.assign(new dtos_1.TaskListDto(), tsk, { comments: undefined });
                taskDto.commentCount = tsk.comments.length;
                taskDtos.push(taskDto);
            });
            return Promise.resolve(taskDtos);
        });
    }
    find(id, requestorId) {
        return new Promise((resolve, reject) => {
            let taskEntity;
            this._taskRepository.findForDetails(id).then((foundTask) => {
                if (!foundTask)
                    throw new app_error_1.AppError('AppError', 'Task not found.', 404);
                taskEntity = foundTask;
                return this.validateAuthority(foundTask.project.id, requestorId);
            }).then(() => {
                let taskDto = Object.assign(new dtos_1.TaskDetailDto(), taskEntity);
                resolve(taskDto);
            }).catch((err) => {
                reject(err);
            });
        });
    }
    //TODO update entity donmemeli
    update(id, model, requestorId) {
        return new Promise((resolve, reject) => {
            let oldTask;
            let updatedTask;
            this._taskRepository.findById(id).then((foundTask) => {
                oldTask = foundTask;
                if (!foundTask)
                    throw new app_error_1.AppError('AppError', 'Task not found.', 404);
                return this.validateAuthority(foundTask.projectId, requestorId);
            }).then(() => {
                updatedTask = Object.assign(oldTask, model);
                return this._taskRepository.update(id, updatedTask);
            }).then(() => {
                resolve(updatedTask);
            }).catch((err) => {
                reject(err);
            });
        });
    }
    delete(id, requestorId) {
        return new Promise((resolve, reject) => {
            this._taskRepository.findById(id).then((foundTask) => {
                if (!foundTask)
                    throw new app_error_1.AppError('AppError', 'Task not found.', 404);
                return this.validateAuthority(foundTask.projectId, requestorId);
            }).then(() => {
                return this._taskRepository.delete(id);
            }).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }
    validateAuthority(projectId, userId) {
        return new Promise((resolve, reject) => {
            this._projectRepository.findOne(projectId, { relations: ["users", "creator"] }).then((res) => {
                let prjct = res;
                if (prjct.members.filter(x => x.userId === userId).length < 1 && prjct.creator.id !== userId)
                    throw new app_error_1.AppError('AppError', 'Bu projede yetkiniz yoktur.', 403);
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }
};
TaskService = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ioc_1.InjectTypes.Repository.TASK)),
    __param(1, inversify_1.inject(ioc_1.InjectTypes.Repository.PROJECT)),
    __metadata("design:paramtypes", [Object, Object])
], TaskService);
exports.TaskService = TaskService;
//TODO task silme ve update işlemlerinde auth için başka kısıtlar da ekle şuanda projeye dahil olan herkes herhangi bir task üzerinde işlem yapabilir.
