INSERT INTO `farmers` (email, first_name, last_name, password)
	VALUES ("test@test.com", "Jean", "Test", "$2b$10$PtmaWBkuWVjvDgTkIC/6EejQ8hJwwORLWvYmsVdX9zUI.kwU5Lszi");

INSERT INTO `farmers_skills_levels` (farmer_id, level_id, skill_id)
	VALUES
	(1, 5, 1),
	(1, 2, 2),
	(1, 4, 3),
	(1, 6, 4),
	(1, 3, 5),
	(1, 2, 6),
	(1, 4, 7),
	(1, 2, 8),
	(1, 2, 9),
	(1, 4, 10),
	(1, 2, 11),
	(1, 3, 12),
	(1, 2, 13),
	(1, 3, 14),
	(1, 6, 15);