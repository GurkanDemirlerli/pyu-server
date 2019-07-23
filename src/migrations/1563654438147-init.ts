import {MigrationInterface, QueryRunner} from "typeorm";

export class init1563654438147 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `subject_task` (`subjectId` int NOT NULL, `priority` int NOT NULL, UNIQUE INDEX `REL_ecb6878c0870aee330fea88a3c` (`subjectId`), PRIMARY KEY (`subjectId`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `workspace` (`workspaceId` int NOT NULL AUTO_INCREMENT, `name` varchar(60) NOT NULL, `createdAt` datetime NOT NULL, PRIMARY KEY (`workspaceId`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `subject_item` (`subjectId` int NOT NULL AUTO_INCREMENT, `workspaceId` int NOT NULL, `parentId` int NULL, `subjectType` int NOT NULL, `name` varchar(60) NOT NULL, `createdAt` datetime NOT NULL, `lastUpdated` datetime NOT NULL, `subjectDeleteState` int NOT NULL, PRIMARY KEY (`subjectId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `subject_task` ADD CONSTRAINT `FK_ecb6878c0870aee330fea88a3c5` FOREIGN KEY (`subjectId`) REFERENCES `subject_item`(`subjectId`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `subject_item` ADD CONSTRAINT `FK_e4110b73082c85a8b02e05787ab` FOREIGN KEY (`workspaceId`) REFERENCES `workspace`(`workspaceId`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `subject_item` ADD CONSTRAINT `FK_5be93818848ecdf698b82f5a5fd` FOREIGN KEY (`parentId`) REFERENCES `subject_item`(`subjectId`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `subject_item` DROP FOREIGN KEY `FK_5be93818848ecdf698b82f5a5fd`");
        await queryRunner.query("ALTER TABLE `subject_item` DROP FOREIGN KEY `FK_e4110b73082c85a8b02e05787ab`");
        await queryRunner.query("ALTER TABLE `subject_task` DROP FOREIGN KEY `FK_ecb6878c0870aee330fea88a3c5`");
        await queryRunner.query("DROP TABLE `subject_item`");
        await queryRunner.query("DROP TABLE `workspace`");
        await queryRunner.query("DROP INDEX `REL_ecb6878c0870aee330fea88a3c` ON `subject_task`");
        await queryRunner.query("DROP TABLE `subject_task`");
    }

}
