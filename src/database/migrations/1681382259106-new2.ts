import { MigrationInterface, QueryRunner } from 'typeorm';

export class new21681382259106 implements MigrationInterface {
  name = 'new21681382259106';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD \`address1\` varchar(255) NOT NULL`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`address1\``);
  }
}
