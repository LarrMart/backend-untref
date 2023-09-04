USE backend_untref;

CREATE TABLE IF NOT EXISTS`ContactosFake` AS
	SELECT 
		`EmployeeID`,
		`LastName`,
		`FirstName`,
		`Title`,
		`City`
	FROM
		Northwind.Employees;

ALTER TABLE `ContactosFake`
MODIFY COLUMN `EmployeeID` 
INT UNSIGNED PRIMARY KEY;

SELECT 'Actualiza en ContactosFake aquellos contactos que estén en la Ciudad de Seattle por CABA'
AS `Consigna nº 1`;

UPDATE `ContactosFake`
SET city = 'CABA'
WHERE city = 'Seattle';

SELECT '2. Actualiza en ContactosFake el empleado cuyo ID es 5, su campo Título por el de Gerente de
Ventas' AS `Consigna nº 2`;

UPDATE `ContactosFake`
SET title = 'Gerente de Ventas'
WHERE employeeID = 5;

SELECT '3. Actualiza en ContactosFake el campo Título por Analista de Ventas para los empleados cuyo ID
sean: 1, 3, 4, 6, 7, 9' AS `Consigna nº 3`;

UPDATE `ContactosFake`
SET `Title` = 'Analista de Ventas'
WHERE employeeID IN (1,3,4,6,7,9);
