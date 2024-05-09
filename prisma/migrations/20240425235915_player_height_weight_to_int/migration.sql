-- CreateTable
CREATE TABLE `lineup` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `match` INTEGER NULL,
    `player` INTEGER NULL,
    `team` INTEGER NULL,
    `status` VARCHAR(100) NULL,

    INDEX `lineup_match_FK`(`match`),
    INDEX `lineup_player_FK`(`player`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `match` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `location` VARCHAR(100) NULL,
    `result` VARCHAR(100) NULL,
    `date` DATE NULL,
    `teamHome` INTEGER NULL,
    `teamAway` INTEGER NULL,

    INDEX `match_team_FK`(`teamHome`),
    INDEX `match_team_FK_1`(`teamAway`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `player` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `position` VARCHAR(100) NULL,
    `birthOf` DATE NULL,
    `nationality` VARCHAR(100) NULL,
    `height` VARCHAR(100) NULL,
    `weight` VARCHAR(100) NULL,
    `dominantFoot` VARCHAR(100) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `team` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `coach` VARCHAR(100) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `lineup` ADD CONSTRAINT `lineup_match_FK` FOREIGN KEY (`match`) REFERENCES `match`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `lineup` ADD CONSTRAINT `lineup_player_FK` FOREIGN KEY (`player`) REFERENCES `player`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `match` ADD CONSTRAINT `match_team_FK` FOREIGN KEY (`teamHome`) REFERENCES `team`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `match` ADD CONSTRAINT `match_team_FK_1` FOREIGN KEY (`teamAway`) REFERENCES `team`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
