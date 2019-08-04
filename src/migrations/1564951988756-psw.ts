import {MigrationInterface, QueryRunner} from "typeorm";

export class psw1564951988756 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `account` ADD `password` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `subject_task` CHANGE `duration` `duration` int NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `subject_task` CHANGE `duration` `duration` int NOT NULL");
        await queryRunner.query("ALTER TABLE `account` DROP COLUMN `password`");
    }

}
