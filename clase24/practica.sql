/*
1. Ejecuta una consulta de selección para obtener 
los campos ProductID, UnitPrice

a. cuenta el total de Productos con el alias TotalProductos
b. contabiliza solo aquellos que tengan un precio superior a 30
*/

USE northwind;

-- 1.a
-- Como en la tabla de productos todos sus registros son distintos
-- Equivale a contar todos los registros

SELECT
	COUNT(*) AS 'Total productos'

FROM products;

-- 1.b
SELECT
        COUNT(*) AS 'Total productos con precio mayor a 30'

FROM products

WHERE
	unitPrice > 30;

/*
1. Ejecuta una consulta de selección para visualizar el campo 
ProductID, y CategoryID

b. cuenta los productos de la tabla y muestra el 
resultado con el alias TotalProductos

c. agrupa por CategoryID
*/

SELECT
        categoryID,
	count(categoryID) AS 'Numero de productos por categoria'

FROM products

GROUP BY
	categoryID

HAVING 
	`Numero de productos por categoria` > 7

ORDER BY 
	`Numero de productos por categoria`;





