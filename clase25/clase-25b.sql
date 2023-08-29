CREATE TABLE IF NOT EXISTS profesores (
	`idProfesor` INT PRIMARY KEY AUTO_INCREMENT,
	`nombreCompleto` VARCHAR(100),
	`materia` VARCHAR(50),
	`fechaContratacion` DATE,
	`telefono` VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS aulas (
	`idAula` INT PRIMARY KEY AUTO_INCREMENT,
	`idProfesor` INT,
	FOREIGN KEY (`idProfesor`)
		REFERENCES profesores(`idProfesor`),
	`capacidad` INT
);

CREATE TABLE IF NOT EXISTS estudiantes (
	`idEstudiante` INT 
		PRIMARY KEY AUTO_INCREMENT,
	`nombreCompleto` VARCHAR(100),
	`idAula` INT,
	`fechaNacimiento` DATE,
	`direccion` VARCHAR(200),
	FOREIGN KEY (`idAula`) 
		REFERENCES `Aulas`(`idAula`)
);

