import { MigrationInterface, QueryRunner } from 'typeorm';

export class newtest451683897254001 implements MigrationInterface {
  name = 'newtest451683897254001';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`card_holder\` ADD \`newCardholderId\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`card_holder\` ADD \`newCardNumber\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`card_holder\` ADD \`flexpayResponse\` json NOT NULL`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`card_holder\` DROP COLUMN \`flexpayResponse\``
    );
    await queryRunner.query(
      `ALTER TABLE \`card_holder\` DROP COLUMN \`newCardNumber\``
    );
    await queryRunner.query(
      `ALTER TABLE \`card_holder\` DROP COLUMN \`newCardholderId\``
    );
  }
}
