-- -----------------------------------------------------
-- Table `User`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Users`;

CREATE TABLE `Users` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(255) NOT NULL,
  `user_password` VARCHAR(255) NOT NULL,
  `user_phone` CHAR(10) NOT NULL,
  `user_address` VARCHAR(255) NULL,
  `user_email` VARCHAR(255) NULL,
  `user_gender` ENUM('female', 'male') NULL,
  `user_birth` DATE NULL,
  `seller_type` BOOLEAN NULL,
  `customer_type` BOOLEAN NULL,
  `employee_type` ENUM('employee') NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_name` (`user_name`),
  UNIQUE KEY `user_phone` (`user_phone`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `Customer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Customer`;

CREATE TABLE `Customer` (
  `cus_vertified` BOOLEAN NULL,
  `User_user_id` INT NOT NULL,
  PRIMARY KEY (`User_user_id`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `Seller`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Seller`;

CREATE TABLE `Seller` (
  `s_vertified` ENUM('Vertified', 'Not-Vertified') NULL,
  `User_user_id` INT NOT NULL,
  PRIMARY KEY (`User_user_id`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `Employee`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Employee`;

CREATE TABLE `Employee` (
  `salary` INT NULL,
  `User_user_id` INT NOT NULL,
  PRIMARY KEY (`User_user_id`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `Contact`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Contact`;

CREATE TABLE `Contact` (
  `con_id` INT NOT NULL AUTO_INCREMENT,
  `con_name` VARCHAR(255) NULL,
  `Employee_User_user_id` INT NOT NULL,
  PRIMARY KEY (`con_id`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `Car`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Car`;

CREATE TABLE `Car` (
  `car_id` INT NOT NULL AUTO_INCREMENT,
  `seller_id` INT NOT NULL,
  `car_year` INT(4) NULL,
  `car_color` VARCHAR(255) NULL,
  `car_desc` TEXT(10000) NULL,
  `car_price` INT NULL,
  `car_regis` VARCHAR(7) NULL,
  `car_distance` INT(7) NULL,
  `car_engine` VARCHAR(255) NULL,
  `car_gear` VARCHAR(255) NULL,
  `car_yearbought` INT(4) NULL,
  `car_owner` ENUM('1st', '2nd', '3rd', '4th', '5th') NULL,
  `car_num_of_gear` INT(1) NULL,
  `car_brand` VARCHAR(255) NULL,
  `car_drive_type` ENUM('awd', 'fwd', 'rwd') NULL,
  `car_act` DATE NULL,
  `car_num_of_door` INT(1) NULL,
  PRIMARY KEY (`car_id`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `Sales_data`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Sales_data`;

CREATE TABLE `Sales_data` (
  `sal_id` INT NOT NULL AUTO_INCREMENT,
  `sal_price` INT NULL,
  `sal_date` DATE NULL,
  `sal_status` ENUM('canceled', 'confirmed', 'pending') NULL,
  `Customer_User_user_id` INT NOT NULL,
  `Employee_User_user_id` INT NOT NULL,
  `Car_car_id` INT NOT NULL,
  PRIMARY KEY (`sal_id`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `Car_images`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Car_images`;

CREATE TABLE `Car_images` (
  `inage_no` INT NOT NULL AUTO_INCREMENT,
  `car_img` VARCHAR(255) NULL,
  `Car_car_id` INT NOT NULL,
  PRIMARY KEY (`inage_no`, `Car_car_id`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `Car_type`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Car_type`;

CREATE TABLE `Car_type` (
  `type_no` INT NOT NULL AUTO_INCREMENT,
  `car_type` VARCHAR(255) NULL,
  `Car_car_id` INT NOT NULL,
  PRIMARY KEY (`type_no`, `Car_car_id`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `Login`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Login`;

CREATE TABLE `Login` (
  `login_id` INT NOT NULL AUTO_INCREMENT,
  `login_username` VARCHAR(255) NOT NULL,
  `login_password` VARCHAR(255) NOT NULL,
  `User_user_id` INT NOT NULL,
  PRIMARY KEY (`login_id`),
  UNIQUE KEY `login_username` (`login_username`),
  UNIQUE KEY `login_password` (`login_password`)
) ENGINE = InnoDB;