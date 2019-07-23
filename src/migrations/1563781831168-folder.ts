import {MigrationInterface, QueryRunner} from "typeorm";

export class folder1563781831168 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `subject_folder` (`subjectId` int NOT NULL, UNIQUE INDEX `REL_5bf2709859dd59a61e66dbd3cf` (`subjectId`), PRIMARY KEY (`subjectId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `subject_folder` ADD CONSTRAINT `FK_5bf2709859dd59a61e66dbd3cfc` FOREIGN KEY (`subjectId`) REFERENCES `subject_item`(`subjectId`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `subject_folder` DROP FOREIGN KEY `FK_5bf2709859dd59a61e66dbd3cfc`");
        await queryRunner.query("DROP INDEX `REL_5bf2709859dd59a61e66dbd3cf` ON `subject_folder`");
        await queryRunner.query("DROP TABLE `subject_folder`");
    }

}
