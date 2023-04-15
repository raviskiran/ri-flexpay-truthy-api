import { MigrationInterface, QueryRunner } from 'typeorm';

export class new71681550558562 implements MigrationInterface {
  name = 'new71681550558562';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`card\` ADD \`plastic\` varchar(255) NOT NULL`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`card\` DROP COLUMN \`plastic\``);
  }
}
