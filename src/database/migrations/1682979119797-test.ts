import { MigrationInterface, QueryRunner } from 'typeorm';

export class test1682979119797 implements MigrationInterface {
  name = 'test1682979119797';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`permission\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`createdBy\` varchar(255) NOT NULL DEFAULT 'superadmin', \`lastModifiedBy\` varchar(255) NOT NULL DEFAULT 'superadmin', \`resource\` varchar(100) NOT NULL, \`description\` varchar(100) NOT NULL, \`path\` varchar(255) NOT NULL, \`method\` varchar(20) NOT NULL DEFAULT 'get', \`isDefault\` tinyint NOT NULL, UNIQUE INDEX \`IDX_b690135d86d59cc689d465ac95\` (\`description\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`role\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`createdBy\` varchar(255) NOT NULL DEFAULT 'superadmin', \`lastModifiedBy\` varchar(255) NOT NULL DEFAULT 'superadmin', \`name\` varchar(100) NOT NULL, \`description\` text NOT NULL, UNIQUE INDEX \`IDX_ae4578dcaed5adff96595e6166\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`createdBy\` varchar(255) NOT NULL DEFAULT 'superadmin', \`lastModifiedBy\` varchar(255) NOT NULL DEFAULT 'superadmin', \`username\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`address\` varchar(255) NOT NULL, \`address1\` varchar(255) NOT NULL, \`contact\` varchar(255) NOT NULL, \`avatar\` varchar(255) NOT NULL, \`status\` varchar(255) NOT NULL, \`token\` varchar(255) NOT NULL, \`tokenValidityDate\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`salt\` varchar(255) NOT NULL, \`twoFASecret\` varchar(255) NULL, \`twoFAThrottleTime\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`isTwoFAEnabled\` tinyint NOT NULL DEFAULT 0, \`roleId\` int NOT NULL, UNIQUE INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` (\`username\`), UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), INDEX \`IDX_065d4d8f3b5adb4a08841eae3c\` (\`name\`), UNIQUE INDEX \`REL_c28e52f758e7bbc53828db9219\` (\`roleId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`document\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`createdBy\` varchar(255) NOT NULL DEFAULT 'superadmin', \`lastModifiedBy\` varchar(255) NOT NULL DEFAULT 'superadmin', \`documentType\` varchar(255) NOT NULL, \`documentUrl\` varchar(255) NOT NULL, \`cardHolderId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`card_holder\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`createdBy\` varchar(255) NOT NULL DEFAULT 'superadmin', \`lastModifiedBy\` varchar(255) NOT NULL DEFAULT 'superadmin', \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`phoneNumber\` varchar(255) NOT NULL, \`dob\` datetime NOT NULL, \`passportId\` varchar(255) NOT NULL, \`additionalData\` json NOT NULL, \`cardId\` int NULL, UNIQUE INDEX \`REL_60222e7e14c5ea60c9acaa2003\` (\`cardId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`card\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`createdBy\` varchar(255) NOT NULL DEFAULT 'superadmin', \`lastModifiedBy\` varchar(255) NOT NULL DEFAULT 'superadmin', \`cardNumber\` varchar(255) NOT NULL, \`sequenceNumber\` varchar(255) NOT NULL, \`trackingNumber\` varchar(255) NOT NULL, \`customerId\` varchar(255) NOT NULL, \`statusId\` varchar(255) NOT NULL, \`allocated\` varchar(255) NOT NULL, \`plastic\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_8ebe167503f779123f14c35dd4\` (\`cardNumber\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`email_templates\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`createdBy\` varchar(255) NOT NULL DEFAULT 'superadmin', \`lastModifiedBy\` varchar(255) NOT NULL DEFAULT 'superadmin', \`title\` varchar(255) NOT NULL, \`slug\` varchar(255) NOT NULL, \`sender\` varchar(255) NOT NULL, \`subject\` varchar(255) NOT NULL, \`body\` varchar(255) NOT NULL, \`isDefault\` tinyint NOT NULL, UNIQUE INDEX \`IDX_4d77a74e85c275da60f4badf83\` (\`title\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`event_log\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`createdBy\` varchar(255) NOT NULL DEFAULT 'superadmin', \`lastModifiedBy\` varchar(255) NOT NULL DEFAULT 'superadmin', \`action\` varchar(255) NOT NULL, \`data\` json NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`refresh_token\` (\`id\` int NOT NULL AUTO_INCREMENT, \`userId\` int NOT NULL, \`ip\` varchar(255) NOT NULL, \`userAgent\` varchar(1000) NOT NULL, \`browser\` varchar(255) NULL, \`os\` varchar(255) NULL, \`isRevoked\` tinyint NOT NULL, \`expires\` datetime NOT NULL, INDEX \`IDX_192c36a5937bf5eeb9de99290b\` (\`browser\`), INDEX \`IDX_cbf62122e9f9d90ecad419d49f\` (\`os\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`role_permission\` (\`roleId\` int NOT NULL, \`permissionId\` int NOT NULL, INDEX \`IDX_e3130a39c1e4a740d044e68573\` (\`roleId\`), INDEX \`IDX_72e80be86cab0e93e67ed1a7a9\` (\`permissionId\`), PRIMARY KEY (\`roleId\`, \`permissionId\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD CONSTRAINT \`FK_c28e52f758e7bbc53828db92194\` FOREIGN KEY (\`roleId\`) REFERENCES \`role\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`document\` ADD CONSTRAINT \`FK_7c27a7a1165da24bd7321e20f83\` FOREIGN KEY (\`cardHolderId\`) REFERENCES \`card_holder\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`card_holder\` ADD CONSTRAINT \`FK_60222e7e14c5ea60c9acaa2003c\` FOREIGN KEY (\`cardId\`) REFERENCES \`card\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`role_permission\` ADD CONSTRAINT \`FK_e3130a39c1e4a740d044e685730\` FOREIGN KEY (\`roleId\`) REFERENCES \`role\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`
    );
    await queryRunner.query(
      `ALTER TABLE \`role_permission\` ADD CONSTRAINT \`FK_72e80be86cab0e93e67ed1a7a9a\` FOREIGN KEY (\`permissionId\`) REFERENCES \`permission\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`role_permission\` DROP FOREIGN KEY \`FK_72e80be86cab0e93e67ed1a7a9a\``
    );
    await queryRunner.query(
      `ALTER TABLE \`role_permission\` DROP FOREIGN KEY \`FK_e3130a39c1e4a740d044e685730\``
    );
    await queryRunner.query(
      `ALTER TABLE \`card_holder\` DROP FOREIGN KEY \`FK_60222e7e14c5ea60c9acaa2003c\``
    );
    await queryRunner.query(
      `ALTER TABLE \`document\` DROP FOREIGN KEY \`FK_7c27a7a1165da24bd7321e20f83\``
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_c28e52f758e7bbc53828db92194\``
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_72e80be86cab0e93e67ed1a7a9\` ON \`role_permission\``
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_e3130a39c1e4a740d044e68573\` ON \`role_permission\``
    );
    await queryRunner.query(`DROP TABLE \`role_permission\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_cbf62122e9f9d90ecad419d49f\` ON \`refresh_token\``
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_192c36a5937bf5eeb9de99290b\` ON \`refresh_token\``
    );
    await queryRunner.query(`DROP TABLE \`refresh_token\``);
    await queryRunner.query(`DROP TABLE \`event_log\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_4d77a74e85c275da60f4badf83\` ON \`email_templates\``
    );
    await queryRunner.query(`DROP TABLE \`email_templates\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_8ebe167503f779123f14c35dd4\` ON \`card\``
    );
    await queryRunner.query(`DROP TABLE \`card\``);
    await queryRunner.query(
      `DROP INDEX \`REL_60222e7e14c5ea60c9acaa2003\` ON \`card_holder\``
    );
    await queryRunner.query(`DROP TABLE \`card_holder\``);
    await queryRunner.query(`DROP TABLE \`document\``);
    await queryRunner.query(
      `DROP INDEX \`REL_c28e52f758e7bbc53828db9219\` ON \`user\``
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_065d4d8f3b5adb4a08841eae3c\` ON \`user\``
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` ON \`user\``
    );
    await queryRunner.query(`DROP TABLE \`user\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_ae4578dcaed5adff96595e6166\` ON \`role\``
    );
    await queryRunner.query(`DROP TABLE \`role\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_b690135d86d59cc689d465ac95\` ON \`permission\``
    );
    await queryRunner.query(`DROP TABLE \`permission\``);
  }
}
