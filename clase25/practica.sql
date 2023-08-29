CREATE TABLE IF NOT EXISTS clientes (
	`idCliente` INT UNSIGNED
 		PRIMARY KEY AUTO_INCREMENT,
	`nombreEmpresa` VARCHAR(50) NOT NULL,
	`rubroEmpresa` VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS equipos (
	`idEquipo` SMALLINT UNSIGNED
		PRIMARY KEY AUTO_INCREMENT,
	`nombreEquipo` VARCHAR(50) NOT NULL UNIQUE,
	`especialidad` VARCHAR(50) NOT NULL,
	`idCliente` INT UNSIGNED NOT NULL,
	FOREIGN KEY (`idCliente`)
		REFERENCES `Clientes`(`idCliente`)
);


CREATE TABLE IF NOT EXISTS empleados (
	`idEmpleado` MEDIUMINT UNSIGNED
		PRIMARY KEY,
	`nombreEmpleado` VARCHAR(80) NOT NULL,
	`puestoEmpresa` VARCHAR(50) NOT NULL,
	`idEquipo` SMALLINT UNSIGNED NOT NULL,
	FOREIGN KEY (`idEquipo`)
		REFERENCES equipos(`idEquipo`)
);
