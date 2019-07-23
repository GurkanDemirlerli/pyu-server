"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class init1563654438147 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("CREATE TABLE `subject_task` (`subjectId` int NOT NULL, `priority` int NOT NULL, UNIQUE INDEX `REL_ecb6878c0870aee330fea88a3c` (`subjectId`), PRIMARY KEY (`subjectId`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `workspace` (`workspaceId` int NOT NULL AUTO_INCREMENT, `name` varchar(60) NOT NULL, `createdAt` datetime NOT NULL, PRIMARY KEY (`workspaceId`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `subject_item` (`subjectId` int NOT NULL AUTO_INCREMENT, `workspaceId` int NOT NULL, `parentId` int NULL, `subjectType` int NOT NULL, `name` varchar(60) NOT NULL, `createdAt` datetime NOT NULL, `lastUpdated` datetime NOT NULL, `subjectDeleteState` int NOT NULL, PRIMARY KEY (`subjectId`)) ENGINE=InnoDB");
            yield queryRunner.query("ALTER TABLE `subject_task` ADD CONSTRAINT `FK_ecb6878c0870aee330fea88a3c5` FOREIGN KEY (`subjectId`) REFERENCES `subject_item`(`subjectId`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `subject_item` ADD CONSTRAINT `FK_e4110b73082c85a8b02e05787ab` FOREIGN KEY (`workspaceId`) REFERENCES `workspace`(`workspaceId`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `subject_item` ADD CONSTRAINT `FK_5be93818848ecdf698b82f5a5fd` FOREIGN KEY (`parentId`) REFERENCES `subject_item`(`subjectId`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("ALTER TABLE `subject_item` DROP FOREIGN KEY `FK_5be93818848ecdf698b82f5a5fd`");
            yield queryRunner.query("ALTER TABLE `subject_item` DROP FOREIGN KEY `FK_e4110b73082c85a8b02e05787ab`");
            yield queryRunner.query("ALTER TABLE `subject_task` DROP FOREIGN KEY `FK_ecb6878c0870aee330fea88a3c5`");
            yield queryRunner.query("DROP TABLE `subject_item`");
            yield queryRunner.query("DROP TABLE `workspace`");
            yield queryRunner.query("DROP INDEX `REL_ecb6878c0870aee330fea88a3c` ON `subject_task`");
            yield queryRunner.query("DROP TABLE `subject_task`");
        });
    }
}
exports.init1563654438147 = init1563654438147;
//# sourceMappingURL=1563654438147-init.js.map