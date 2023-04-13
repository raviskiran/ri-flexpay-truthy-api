import { MigrationInterface, QueryRunner } from 'typeorm';

export class new31681388653347 implements MigrationInterface {
  name = 'new31681388653347';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`document\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`createdBy\` varchar(255) NOT NULL, \`lastModifiedBy\` varchar(255) NOT NULL, \`documentType\` varchar(255) NOT NULL, \`documentUrl\` varchar(255) NOT NULL, \`cardHolderId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`card_holder\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`createdBy\` varchar(255) NOT NULL, \`lastModifiedBy\` varchar(255) NOT NULL, \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`phoneNumber\` varchar(255) NOT NULL, \`dob\` datetime NOT NULL, \`passportId\` varchar(255) NOT NULL, \`additionalData\` json NOT NULL, \`cardId\` int NULL, UNIQUE INDEX \`REL_60222e7e14c5ea60c9acaa2003\` (\`cardId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`card\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`createdBy\` varchar(255) NOT NULL, \`lastModifiedBy\` varchar(255) NOT NULL, \`cardNumber\` varchar(255) NOT NULL, \`sequenceNumber\` varchar(255) NOT NULL, \`trackingNumber\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_8ebe167503f779123f14c35dd4\` (\`cardNumber\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`event_log\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`createdBy\` varchar(255) NOT NULL, \`lastModifiedBy\` varchar(255) NOT NULL, \`action\` varchar(255) NOT NULL, \`data\` json NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `ALTER TABLE \`permission\` ADD \`createdBy\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`permission\` ADD \`lastModifiedBy\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`role\` ADD \`createdBy\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`role\` ADD \`lastModifiedBy\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD \`createdBy\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD \`lastModifiedBy\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`email_templates\` ADD \`createdBy\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`email_templates\` ADD \`lastModifiedBy\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`document\` ADD CONSTRAINT \`FK_7c27a7a1165da24bd7321e20f83\` FOREIGN KEY (\`cardHolderId\`) REFERENCES \`card_holder\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`card_holder\` ADD CONSTRAINT \`FK_60222e7e14c5ea60c9acaa2003c\` FOREIGN KEY (\`cardId\`) REFERENCES \`card\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`card_holder\` DROP FOREIGN KEY \`FK_60222e7e14c5ea60c9acaa2003c\``
    );
    await queryRunner.query(
      `ALTER TABLE \`document\` DROP FOREIGN KEY \`FK_7c27a7a1165da24bd7321e20f83\``
    );
    await queryRunner.query(
      `ALTER TABLE \`email_templates\` DROP COLUMN \`lastModifiedBy\``
    );
    await queryRunner.query(
      `ALTER TABLE \`email_templates\` DROP COLUMN \`createdBy\``
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` DROP COLUMN \`lastModifiedBy\``
    );
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`createdBy\``);
    await queryRunner.query(
      `ALTER TABLE \`role\` DROP COLUMN \`lastModifiedBy\``
    );
    await queryRunner.query(`ALTER TABLE \`role\` DROP COLUMN \`createdBy\``);
    await queryRunner.query(
      `ALTER TABLE \`permission\` DROP COLUMN \`lastModifiedBy\``
    );
    await queryRunner.query(
      `ALTER TABLE \`permission\` DROP COLUMN \`createdBy\``
    );
    await queryRunner.query(`DROP TABLE \`event_log\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_8ebe167503f779123f14c35dd4\` ON \`card\``
    );
    await queryRunner.query(`DROP TABLE \`card\``);
    await queryRunner.query(
      `DROP INDEX \`REL_60222e7e14c5ea60c9acaa2003\` ON \`card_holder\``
    );
    await queryRunner.query(`DROP TABLE \`card_holder\``);
    await queryRunner.query(`DROP TABLE \`document\``);
  }
}
