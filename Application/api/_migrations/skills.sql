CREATE TABLE `skills` ( 
	`id` INT NOT NULL AUTO_INCREMENT, 
	`name` VARCHAR(75) NOT NULL, 
	`description` VARCHAR(255) NOT NULL, 
	`theme_id` INT NOT NULL, 
	 PRIMARY KEY (`id`) 
) ENGINE = InnoDB;
