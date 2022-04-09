import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1649483282255 implements MigrationInterface {
    name = 'migration1649483282255'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "my_app" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "nama" varchar NOT NULL, "alamat" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "my_app"`);
    }

}
