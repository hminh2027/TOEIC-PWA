CREATE TABLE `USERS` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `role_id` int NOT NULL,
  `username` nvarchar(255),
  `email` varchar(50) UNIQUE,
  `password` varchar(100),
  `avatar` varchar(255),
  `created_at` datetime DEFAULT (getdate()),
  `updated_at` datetime DEFAULT (getdate()),
  `is_active` bit DEFAULT 1
);

CREATE TABLE `CONFIGS` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `config_file` varchar(255)
);

CREATE TABLE `FAVORITES` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `question_id` int NOT NULL,
  `note` nvarchar(255)
);

CREATE TABLE `ROLES` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` nvarchar(255)
);

CREATE TABLE `TESTS` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(255),
  `score` int,
  `slug` varchar(255),
  `duration` varchar(255),
  `created_at` datetime DEFAULT (getdate()),
  `updated_at` datetime DEFAULT (getdate()),
  `is_deleted` bit DEFAULT 0
);

CREATE TABLE `ATTEMPTS` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `test_id` int NOT NULL,
  `status_id` int NOT NULL,
  `score` int,
  `created_at` datetime DEFAULT (getdate()),
  `updated_at` datetime DEFAULT (getdate()),
  `is_deleted` bit DEFAULT 0
);

CREATE TABLE `ATTEMPT_CHOICES` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `attempt_id` int NOT NULL,
  `choice_id` int NOT NULL
);

CREATE TABLE `ATTEMPT_STATUS` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255)
);

CREATE TABLE `QUESTIONS` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `test_id` int NOT NULL,
  `content` varchar(255)
);

CREATE TABLE `CHOICES` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `question_id` int NOT NULL,
  `content` nvarchar(255),
  `is_correct` bit
);

CREATE TABLE `FEEDBACKS` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `question_id` int NOT NULL,
  `content` nvarchar(255),
  `created_at` datetime DEFAULT (getdate()),
  `updated_at` datetime DEFAULT (getdate()),
  `is_deleted` bit DEFAULT 0
);

ALTER TABLE `USERS` ADD FOREIGN KEY (`role_id`) REFERENCES `ROLES` (`id`);

ALTER TABLE `CONFIGS` ADD FOREIGN KEY (`user_id`) REFERENCES `USERS` (`id`);

ALTER TABLE `FAVORITES` ADD FOREIGN KEY (`user_id`) REFERENCES `USERS` (`id`);

ALTER TABLE `FAVORITES` ADD FOREIGN KEY (`question_id`) REFERENCES `QUESTIONS` (`id`);

ALTER TABLE `ATTEMPTS` ADD FOREIGN KEY (`user_id`) REFERENCES `USERS` (`id`);

ALTER TABLE `ATTEMPTS` ADD FOREIGN KEY (`test_id`) REFERENCES `TESTS` (`id`);

ALTER TABLE `ATTEMPTS` ADD FOREIGN KEY (`status_id`) REFERENCES `ATTEMPT_STATUS` (`id`);

ALTER TABLE `ATTEMPT_CHOICES` ADD FOREIGN KEY (`attempt_id`) REFERENCES `ATTEMPTS` (`id`);

ALTER TABLE `ATTEMPT_CHOICES` ADD FOREIGN KEY (`choice_id`) REFERENCES `CHOICES` (`id`);

ALTER TABLE `QUESTIONS` ADD FOREIGN KEY (`test_id`) REFERENCES `TESTS` (`id`);

ALTER TABLE `CHOICES` ADD FOREIGN KEY (`question_id`) REFERENCES `QUESTIONS` (`id`);

ALTER TABLE `FEEDBACKS` ADD FOREIGN KEY (`user_id`) REFERENCES `USERS` (`id`);

ALTER TABLE `FEEDBACKS` ADD FOREIGN KEY (`question_id`) REFERENCES `QUESTIONS` (`id`);
