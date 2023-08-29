CREATE DATABASE IF NOT EXISTS `basededatos`
DEFAULT CHARACTER SET utf8;

USE `basededatos`;

CREATE TABLE IF NOT EXISTS amigos (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nombre VARCHAR(30) NOT NULL,
	apellido VARCHAR(30) NOT NULL,
	email VARCHAR(50) NOT NULL
);

ALTER TABLE amigos
ADD COLUMN telefono VARCHAR(30),
ADD COLUMN comentarios VARCHAR(200);

ALTER TABLE amigos
MODIFY telefono VARCHAR(50) NOT NULL,
MODIFY comentarios VARCHAR(220);

ALTER TABLE amigos
CHANGE COLUMN comentarios sugerencias VARCHAR(500);

ALTER TABLE amigos
RENAME TO contactos;

ALTER TABLE contactos
DROP COLUMN sugerencias;


/*
INSERT INTO amigos 
(nombre, apellido, email) VALUES 
('Guillermo', 'Martínez', 'alskdjflakdjflaskjf'),
('Rodolfo', 'Donófrio', 'alskdjflakdflaksdfja'')
*/
