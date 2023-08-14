
use ecommerce;

-- UNIQUE INDEX "Id_UNIQUE" ("id" ASC) VISIBLE
CREATE TABLE contactos_personales(
	id INT NOT NULL UNIQUE AUTO_INCREMENT,
	nombre_completo VARCHAR(50) NOT NULL,
	telefono VARCHAR(12) NOT NULL DEFAULT 0,
	tipo_de_telefono VARCHAR(10) NOT NULL DEFAULT "N/A",
	PRIMARY KEY(id)
);
