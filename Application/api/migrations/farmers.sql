CREATE TABLE `farmers` ( 
	`id` INT NOT NULL AUTO_INCREMENT, 
	`email` VARCHAR(100) NOT NULL, 
	`first_name` VARCHAR(75) NOT NULL, 
	`last_name` VARCHAR(75) NOT NULL,
	 PRIMARY KEY (`id`)
) ENGINE = InnoDB;