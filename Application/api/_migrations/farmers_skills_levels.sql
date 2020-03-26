CREATE TABLE `farmers_skills_levels` ( 
	`id` INT NOT NULL AUTO_INCREMENT, 
	`farmer_id` INT NOT NULL,
    `skill_id` INT NOT NULL,
    `level_id` INT NOT NULL,
	 PRIMARY KEY (`id`)
) ENGINE = InnoDB;
