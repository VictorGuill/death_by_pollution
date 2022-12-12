-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema death_by_p
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `death_by_p` ;

-- -----------------------------------------------------
-- Schema death_by_p
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `death_by_p` DEFAULT CHARACTER SET utf8 ;
USE `death_by_p` ;

-- -----------------------------------------------------
-- Table `death_by_p`.`user_type`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `death_by_p`.`user_type` (
  `id` INT NOT NULL,
  `name` VARCHAR(10) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Data for table `death_by_p`.`user_type`
-- -----------------------------------------------------
START TRANSACTION;
USE `death_by_p`;
INSERT INTO `death_by_p`.`user_type` (`id`, `name`) VALUES (0, 'user');
INSERT INTO `death_by_p`.`user_type` (`id`, `name`) VALUES (1, 'admin');
INSERT INTO `death_by_p`.`user_type` (`id`, `name`) VALUES (2, 'superadmin');

COMMIT;

-- -----------------------------------------------------
-- Table `death_by_p`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `death_by_p`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(30) NULL,
  `password` CHAR(255) NULL,
  `phase` TINYINT NULL,
  `user_type_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_users_user_type_idx` (`user_type_id` ASC) VISIBLE,
  CONSTRAINT `fk_users_user_type`
    FOREIGN KEY (`user_type_id`)
    REFERENCES `death_by_p`.`user_type` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Data for table `death_by_p`.`users`
-- -----------------------------------------------------
START TRANSACTION;
USE `death_by_p`;
INSERT INTO `death_by_p`.`users` (`name`,`password`,`phase`,`user_type_id`) VALUES ('victor','3c9909afec25354d551dae21590bb26e38d53f2173b8d3dc3eee4c047e7ab1c1eb8b85103e3be7ba613b31bb5c9c36214dc9f14a42fd7a2fdb84856bca5c44c2','3','2');
INSERT INTO `death_by_p`.`users` (`name`,`password`,`phase`,`user_type_id`) VALUES ('guillem','3c9909afec25354d551dae21590bb26e38d53f2173b8d3dc3eee4c047e7ab1c1eb8b85103e3be7ba613b31bb5c9c36214dc9f14a42fd7a2fdb84856bca5c44c2','3','2');
INSERT INTO `death_by_p`.`users` (`name`,`password`,`phase`,`user_type_id`) VALUES ('maria','3c9909afec25354d551dae21590bb26e38d53f2173b8d3dc3eee4c047e7ab1c1eb8b85103e3be7ba613b31bb5c9c36214dc9f14a42fd7a2fdb84856bca5c44c2','3','2');

COMMIT;

-- -----------------------------------------------------
-- Table `death_by_p`.`games`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `death_by_p`.`games` (
  `id` TINYINT NOT NULL,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Data for table `death_by_p`.`games`
-- -----------------------------------------------------
START TRANSACTION;
USE `death_by_p`;
INSERT INTO `death_by_p`.`games` (`id`, `name`) VALUES (0, 'super scuba');
INSERT INTO `death_by_p`.`games` (`id`, `name`) VALUES (1, 'train track');
INSERT INTO `death_by_p`.`games` (`id`, `name`) VALUES (2, 'sky dive');

COMMIT;

-- -----------------------------------------------------
-- Table `death_by_p`.`scores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `death_by_p`.`scores` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `games_id` TINYINT NOT NULL,
  `users_id` INT NOT NULL,
  `score` INT NULL,
  `game_time` TINYINT NULL,
  `date` DATETIME NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_games_has_users_users1_idx` (`users_id` ASC) VISIBLE,
  INDEX `fk_games_has_users_games1_idx` (`games_id` ASC) VISIBLE,
  CONSTRAINT `fk_games_has_users_games1`
    FOREIGN KEY (`games_id`)
    REFERENCES `death_by_p`.`games` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_games_has_users_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `death_by_p`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
-- CREATE DB END



UPDATE users
SET users.phase = 2
WHERE users.id = 5;

INSERT INTO scores (games_id, users_id, score, game_time, date) VALUES (0, 1, 45, 60, now());
INSERT INTO scores (games_id, users_id, score, game_time, date) VALUES (1, 1, 75, 60, now());
INSERT INTO scores (games_id, users_id, score, game_time, date) VALUES (1, 1, 53, 60, now());
INSERT INTO scores (games_id, users_id, score, game_time, date) VALUES (1, 2, 23, 60, now());
INSERT INTO scores (games_id, users_id, score, game_time, date) VALUES (1, 2, 223, 60, now());

SELECT * FROM user_type;

SELECT * FROM users;
SELECT * FROM games;
SELECT * FROM scores;

DELETE FROM users WHERE users.id=3;


SELECT  user_type.name FROM users
INNER JOIN user_type
ON users.user_type_id = user_type.id
WHERE users.name = "victor";



-- query search user

SELECT * FROM users
WHERE users.name = "victor"
AND users.password = "12345";


-- query get user results game
SELECT * FROM users
INNER JOIN scores
ON users.id = scores.users_id
INNER JOIN games
ON scores.games_id = games.id
WHERE games.id = 1;

SELECT users.name, score FROM users
INNER JOIN scores
ON users.id = scores.users_id
INNER JOIN games
ON scores.games_id = games.id
WHERE games.id = 0
ORDER BY scores.score DESC
LIMIT 10000
OFFSET 3;

SELECT users.name, score FROM users
INNER JOIN scores
ON users.id = scores.users_id
INNER JOIN games
ON scores.games_id = games.id
WHERE games.id = 1
ORDER BY scores.score DESC
LIMIT 2, 1;





SELECT * FROM users
INNER JOIN scores
ON users.id = scores.user_id;