-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`TIPO_USUARIO`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`TIPO_USUARIO` ;

CREATE TABLE IF NOT EXISTS `mydb`.`TIPO_USUARIO` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `rol` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`USUARIO`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`USUARIO` ;

CREATE TABLE IF NOT EXISTS `mydb`.`USUARIO` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `run` VARCHAR(45) NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido_paterno` VARCHAR(45) NOT NULL,
  `apellido_materno` VARCHAR(45) NOT NULL,
  `TIPO_USUARIO_id` INT NOT NULL,
  `contrasenia` VARCHAR(45) NOT NULL,
  `estado` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`, `TIPO_USUARIO_id`),
  INDEX `fk_USUARIO_TIPO_USUARIO1_idx` (`TIPO_USUARIO_id` ASC),
  CONSTRAINT `fk_USUARIO_TIPO_USUARIO1`
    FOREIGN KEY (`TIPO_USUARIO_id`)
    REFERENCES `mydb`.`TIPO_USUARIO` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`CATEGORIA_PRODUCTO`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`CATEGORIA_PRODUCTO` ;

CREATE TABLE IF NOT EXISTS `mydb`.`CATEGORIA_PRODUCTO` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`PRODUCTO`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`PRODUCTO` ;

CREATE TABLE IF NOT EXISTS `mydb`.`PRODUCTO` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `CATEGORIA_PRODUCTO_id` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `precio` VARCHAR(45) NOT NULL,
  `stock` INT NOT NULL,
  `descripcion` VARCHAR(45) NULL,
  PRIMARY KEY (`id`, `CATEGORIA_PRODUCTO_id`),
  INDEX `fk_PRODUCTO_CATEGORIA_PRODUCTO1_idx` (`CATEGORIA_PRODUCTO_id` ASC),
  CONSTRAINT `fk_PRODUCTO_CATEGORIA_PRODUCTO1`
    FOREIGN KEY (`CATEGORIA_PRODUCTO_id`)
    REFERENCES `mydb`.`CATEGORIA_PRODUCTO` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`VENTA`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`VENTA` ;

CREATE TABLE IF NOT EXISTS `mydb`.`VENTA` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_usuario` INT NOT NULL,
  `fecha_hora` TIMESTAMP NOT NULL,
  `total` INT NOT NULL,
  `estado` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`, `id_usuario`),
  INDEX `fk_VENTA_USUARIO1_idx` (`id_usuario` ASC),
  CONSTRAINT `fk_VENTA_USUARIO1`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `mydb`.`USUARIO` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`detalle_venta`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`detalle_venta` ;

CREATE TABLE IF NOT EXISTS `mydb`.`detalle_venta` (
  `id_producto` INT NOT NULL,
  `id_venta` INT NOT NULL,
  `cantidad` INT NOT NULL,
  PRIMARY KEY (`id_producto`, `id_venta`),
  INDEX `fk_PRODUCTO_has_VENTA_VENTA1_idx` (`id_venta` ASC),
  INDEX `fk_PRODUCTO_has_VENTA_PRODUCTO1_idx` (`id_producto` ASC),
  CONSTRAINT `fk_PRODUCTO_has_VENTA_PRODUCTO1`
    FOREIGN KEY (`id_producto`)
    REFERENCES `mydb`.`PRODUCTO` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_PRODUCTO_has_VENTA_VENTA1`
    FOREIGN KEY (`id_venta`)
    REFERENCES `mydb`.`VENTA` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
