USE northwind;

-- Contabilizar la cantidad de empleados de la empresa
SELECT 
	COUNT(*) AS 'Cantidad de empleados'
	
FROM employees;

-- Contabilizar los empleados cuyo puesto es 'Sales Representative'

SELECT COUNT(*) AS 'Cant. de repr. de venta'
FROM employees
WHERE title = 'Sales Representative';

-- Contabilizar el total de dinero invertido en fletes

SELECT 
	SUM(freight) AS `Total dinero en Fletes`
	
FROM orders;

-- Contabilizar el total de las ordenes 10256, 10258, 10260

SELECT 
	SUM(freight) AS `Total fletes: 10256, 10258, 10260`
	
FROM orders
WHERE orderID IN(10256, 10258, 10260);

-- Identificar los productos con el valor máximo y mínimo 
-- respectivamente, y además de la media del precio.

SELECT 
	MIN(unitPrice) AS `Producto de menor valor`,
	MAX(unitPrice) AS `Producto de mayor valor`,
	AVG(unitPrice) AS `Precio Promedio`
	
FROM products;

-- Columnas calculadas

SELECT 
	productID,
	productName,
	categoryID,
	unitPrice,
	ROUND(unitPrice * 1.2, 2) AS veintePorcientoOn,
	ROUND(unitPrice * 0.9, 2) AS DiezPorCientoOff
	
FROM products;

SELECT 
	'Identificar el precio promedio de los productos, discriminando por proveedor.' AS `Consigna`;

SELECT
	supplierID,
	ROUND(AVG(unitPrice), 2) AS `Precio Promedio`
	
FROM products
GROUP BY supplierID;

-- Misma consigna anterior agregando el nombre del proveedor

SELECT
	p.supplierID,
	s.companyName,
	ROUND(AVG(p.unitPrice), 2) AS `Precio Promedio`
	
FROM products p
INNER JOIN suppliers s
ON p.supplierID = s.supplierID
GROUP BY supplierID
ORDER BY p.supplierID;

-- Necesito saber a que proveedores le compro más de dos
-- tipos de productos distintos.

SELECT UCASE('Necesito saber a que proveedores le compro más de dos tipos de productos distintos.') AS `Consigna`;

SELECT
	p.supplierID,
	s.companyName,
	COUNT(p.productID) AS `Productos que le compro`
	
FROM products p
INNER JOIN suppliers s
ON p.supplierID = s.supplierID
GROUP BY supplierID
HAVING `Productos que le compro` > 2
ORDER BY p.supplierID;


