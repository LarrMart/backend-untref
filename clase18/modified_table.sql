-- ALTER TABLE table_name MODIFY COLUMN column_name datatype

ALTER TABLE contactos_personales 
MODIFY COLUMN nombre_completo VARCHAR(70) NOT NULL,
MODIFY COLUMN telefono VARCHAR(22) NOT NULL DEFAULT "0",
MODIFY COLUMN tipo_de_telefono VARCHAR(15) DEFAULT 'N/A';
