import { MigrationInterface, QueryRunner } from 'typeorm';

export class new51681405968777 implements MigrationInterface {
  name = 'new51681405968777';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`permission\` CHANGE \`lastModifiedBy\` \`lastModifiedBy\` varchar(255) NOT NULL DEFAULT 'superadmin'`
    );
    await queryRunner.query(
      `ALTER TABLE \`role\` CHANGE \`lastModifiedBy\` \`lastModifiedBy\` varchar(255) NOT NULL DEFAULT 'superadmin'`
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` CHANGE \`lastModifiedBy\` \`lastModifiedBy\` varchar(255) NOT NULL DEFAULT 'superadmin'`
    );
    await queryRunner.query(
      `ALTER TABLE \`document\` CHANGE \`lastModifiedBy\` \`lastModifiedBy\` varchar(255) NOT NULL DEFAULT 'superadmin'`
    );
    await queryRunner.query(
      `ALTER TABLE \`card_holder\` CHANGE \`lastModifiedBy\` \`lastModifiedBy\` varchar(255) NOT NULL DEFAULT 'superadmin'`
    );
    await queryRunner.query(
      `ALTER TABLE \`card\` CHANGE \`lastModifiedBy\` \`lastModifiedBy\` varchar(255) NOT NULL DEFAULT 'superadmin'`
    );
    await queryRunner.query(
      `ALTER TABLE \`email_templates\` CHANGE \`lastModifiedBy\` \`lastModifiedBy\` varchar(255) NOT NULL DEFAULT 'superadmin'`
    );
    await queryRunner.query(
      `ALTER TABLE \`event_log\` CHANGE \`lastModifiedBy\` \`lastModifiedBy\` varchar(255) NOT NULL DEFAULT 'superadmin'`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`event_log\` CHANGE \`lastModifiedBy\` \`lastModifiedBy\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`email_templates\` CHANGE \`lastModifiedBy\` \`lastModifiedBy\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`card\` CHANGE \`lastModifiedBy\` \`lastModifiedBy\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`card_holder\` CHANGE \`lastModifiedBy\` \`lastModifiedBy\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`document\` CHANGE \`lastModifiedBy\` \`lastModifiedBy\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` CHANGE \`lastModifiedBy\` \`lastModifiedBy\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`role\` CHANGE \`lastModifiedBy\` \`lastModifiedBy\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`permission\` CHANGE \`lastModifiedBy\` \`lastModifiedBy\` varchar(255) NOT NULL`
    );
  }
}
