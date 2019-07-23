import {MigrationInterface, QueryRunner} from "typeorm";

export class customfield1563789752619 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `subject_custom_field` (`subjectId` int NOT NULL, `customFieldId` int NOT NULL, `value` varchar(255) NOT NULL, PRIMARY KEY (`subjectId`, `customFieldId`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `custom_field` (`customFieldId` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `customFieldType` int NOT NULL, `createdAt` datetime NOT NULL, `lastUpdated` datetime NOT NULL, PRIMARY KEY (`customFieldId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `subject_custom_field` ADD CONSTRAINT `FK_b7694e85f0f7559a19431fd1739` FOREIGN KEY (`subjectId`) REFERENCES `subject_item`(`subjectId`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `subject_custom_field` ADD CONSTRAINT `FK_1d36138db13dbda295bd7846095` FOREIGN KEY (`customFieldId`) REFERENCES `custom_field`(`customFieldId`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `subject_custom_field` DROP FOREIGN KEY `FK_1d36138db13dbda295bd7846095`");
        await queryRunner.query("ALTER TABLE `subject_custom_field` DROP FOREIGN KEY `FK_b7694e85f0f7559a19431fd1739`");
        await queryRunner.query("DROP TABLE `custom_field`");
        await queryRunner.query("DROP TABLE `subject_custom_field`");
    }

}
