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
-- Table `death_by_p`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `death_by_p`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(30) NULL,
  `password` VARCHAR(20) NULL,
  `pahse` TINYINT NULL,
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
-- Table `death_by_p`.`games`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `death_by_p`.`games` (
  `id` TINYINT NOT NULL,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `death_by_p`.`scores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `death_by_p`.`scores` (
  `games_id` TINYINT NOT NULL,
  `users_id` INT NOT NULL,
  `score` INT NULL,
  `game_time` TINYINT NULL,
  `date` DATETIME NULL,
  PRIMARY KEY (`games_id`, `users_id`),
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
