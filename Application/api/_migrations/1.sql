CREATE TABLE `farmers` ( 
	`id` INT NOT NULL AUTO_INCREMENT, 
	`email` VARCHAR(100) NOT NULL, 
	`first_name` VARCHAR(75) NOT NULL, 
	`last_name` VARCHAR(75) NOT NULL,
	`password` VARCHAR(255) NOT NULL,
	 PRIMARY KEY (`id`)
) ENGINE = InnoDB;

CREATE TABLE `levels` ( 
	`id` INT NOT NULL AUTO_INCREMENT, 
	`name` VARCHAR(75) NOT NULL, 
	`description` VARCHAR(255) NOT NULL,
	`image` VARCHAR(255) NOT NULL,
	 PRIMARY KEY (`id`)
) ENGINE = InnoDB;

CREATE TABLE `themes` ( 
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(255) NOT NULL,
	`description` LONGTEXT NOT NULL,
	 PRIMARY KEY (`id`)
) ENGINE = InnoDB;

CREATE TABLE `skills` ( 
	`id` INT NOT NULL AUTO_INCREMENT, 
	`name` VARCHAR(255) NOT NULL, 
	`description` LONGTEXT NOT NULL, 
	`theme_id` INT NOT NULL, 
	 PRIMARY KEY (`id`) 
) ENGINE = InnoDB;

ALTER TABLE `skills` 
	ADD CONSTRAINT `skills_theme_ibfk1` 
	FOREIGN KEY (`theme_id`) 
	REFERENCES `themes`(`id`); 

CREATE TABLE `farmers_skills_levels` ( 
	`id` INT NOT NULL AUTO_INCREMENT, 
	`farmer_id` INT NOT NULL,
    `skill_id` INT NOT NULL,
    `level_id` INT NOT NULL,
	 PRIMARY KEY (`id`)
) ENGINE = InnoDB;

ALTER TABLE `farmers_skills_levels` 
	ADD CONSTRAINT `farmers_skills_levels_level_ibfk1` 
	FOREIGN KEY (`level_id`) 
	REFERENCES `levels`(`id`);

ALTER TABLE `farmers_skills_levels`
	ADD CONSTRAINT `farmers_skills_levels_farmer_ibfk1` 
	FOREIGN KEY (`farmer_id`) 
	REFERENCES `farmers`(`id`);

ALTER TABLE `farmers_skills_levels`
	ADD CONSTRAINT `farmers_skills_levels_skill_ibfk1` 
	FOREIGN KEY (`skill_id`) 
	REFERENCES `skills`(`id`);

CREATE TABLE `farmers_skills_tips` ( 
	`id` INT NOT NULL AUTO_INCREMENT, 
	`farmer_id` INT NOT NULL,
    `skill_id` INT NOT NULL,
    `tip_name` VARCHAR(255) NOT NULL,
    `tip_content` LONGTEXT NOT NULL,
	 PRIMARY KEY (`id`)
) ENGINE = InnoDB;

ALTER TABLE `farmers_skills_tips` 
	ADD CONSTRAINT `farmers_skills_tips_skill_ibfk1` 
	FOREIGN KEY (`skill_id`) 
	REFERENCES `skills`(`id`);

ALTER TABLE `farmers_skills_tips`
	ADD CONSTRAINT `farmers_skills_tips_farmer_ibfk1` 
	FOREIGN KEY (`farmer_id`) 
	REFERENCES `farmers`(`id`);