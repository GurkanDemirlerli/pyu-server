import {MigrationInterface, QueryRunner} from "typeorm";

export class accfix1564398197292 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `account` CHANGE `workflowId` `accountId` int NOT NULL AUTO_INCREMENT");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `account` CHANGE `accountId` `workflowId` int NOT NULL AUTO_INCREMENT");
    }

}
