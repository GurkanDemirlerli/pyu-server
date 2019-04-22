// import { AppError } from '../errors/app-error';
// import { ErrorHandler } from '../errors/error-handler';
import { injectable, inject } from 'inversify';
import { InjectTypes } from '../ioc';
import { validate } from 'class-validator';
import {
    Request,
    Response,
    NextFunction
} from 'express';
import 'reflect-metadata';
import { ProjectCreateDto } from '../_models/dtos/project/project-create.dto';
import { ErrorHandler } from '../errors/error-handler';
import { IProjectService } from '../@services/abstract/i-project.service';
@injectable()
export class ProjectController {

    constructor(
        @inject(InjectTypes.Service.PROJECT) private readonly _projectService: IProjectService
    ) { }

    list(req: Request, res: Response, next: NextFunction) {
        // this._projectRepository.list().then((result: any) => {
        //     console.log("Result : " + result);
            res.send("aaa");
        // });
    }


    insert(req: Request, res: Response, next: NextFunction) {
        let prjDto: ProjectCreateDto = Object.assign(new ProjectCreateDto(), req.body);
        prjDto.userId = req.decoded.id;
        this._projectService.add(prjDto).then((result) => {
            return res.status(201).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'insert', 'ProjectController');
        });
    }
}