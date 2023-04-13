import { MigrationInterface, QueryRunner } from 'typeorm';

export class new41681405451276 implements MigrationInterface {
  name = 'new41681405451276';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`permission\` CHANGE \`createdBy\` \`createdBy\` varchar(255) NOT NULL DEFAULT 'superadmin'`
    );
    await queryRunner.query(
      `ALTER TABLE \`role\` CHANGE \`createdBy\` \`createdBy\` varchar(255) NOT NULL DEFAULT 'superadmin'`
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` CHANGE \`createdBy\` \`createdBy\` varchar(255) NOT NULL DEFAULT 'superadmin'`
    );
    await queryRunner.query(
      `ALTER TABLE \`document\` CHANGE \`createdBy\` \`createdBy\` varchar(255) NOT NULL DEFAULT 'superadmin'`
    );
    await queryRunner.query(
      `ALTER TABLE \`card_holder\` CHANGE \`createdBy\` \`createdBy\` varchar(255) NOT NULL DEFAULT 'superadmin'`
    );
    await queryRunner.query(
      `ALTER TABLE \`card\` CHANGE \`createdBy\` \`createdBy\` varchar(255) NOT NULL DEFAULT 'superadmin'`
    );
    await queryRunner.query(
      `ALTER TABLE \`email_templates\` CHANGE \`createdBy\` \`createdBy\` varchar(255) NOT NULL DEFAULT 'superadmin'`
    );
    await queryRunner.query(
      `ALTER TABLE \`event_log\` CHANGE \`createdBy\` \`createdBy\` varchar(255) NOT NULL DEFAULT 'superadmin'`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`event_log\` CHANGE \`createdBy\` \`createdBy\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`email_templates\` CHANGE \`createdBy\` \`createdBy\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`card\` CHANGE \`createdBy\` \`createdBy\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`card_holder\` CHANGE \`createdBy\` \`createdBy\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`document\` CHANGE \`createdBy\` \`createdBy\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` CHANGE \`createdBy\` \`createdBy\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`role\` CHANGE \`createdBy\` \`createdBy\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`permission\` CHANGE \`createdBy\` \`createdBy\` varchar(255) NOT NULL`
    );
  }
}
