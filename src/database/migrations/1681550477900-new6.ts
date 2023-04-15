import { MigrationInterface, QueryRunner } from 'typeorm';

export class new61681550477900 implements MigrationInterface {
  name = 'new61681550477900';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`card\` ADD \`customerId\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`card\` ADD \`statusId\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`card\` ADD \`allocated\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`refresh_token\` DROP COLUMN \`userAgent\``
    );
    await queryRunner.query(
      `ALTER TABLE \`refresh_token\` ADD \`userAgent\` varchar(1000) NOT NULL`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`refresh_token\` DROP COLUMN \`userAgent\``
    );
    await queryRunner.query(
      `ALTER TABLE \`refresh_token\` ADD \`userAgent\` text NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE \`card\` DROP COLUMN \`allocated\``);
    await queryRunner.query(`ALTER TABLE \`card\` DROP COLUMN \`statusId\``);
    await queryRunner.query(`ALTER TABLE \`card\` DROP COLUMN \`customerId\``);
  }
}
