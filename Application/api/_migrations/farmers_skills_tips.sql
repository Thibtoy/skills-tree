CREATE TABLE `farmers_skills_tips` ( 
	`id` INT NOT NULL AUTO_INCREMENT, 
	`farmer_id` INT NOT NULL,
    `skill_id` INT NOT NULL,
    `tip_name` VARCHAR(255) NOT NULL,
    `tip_content` VARCHAR(255) NOT NULL,
	 PRIMARY KEY (`id`)
) ENGINE = InnoDB;
