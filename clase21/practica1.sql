SELECT productId as 'Código', 
productName AS 'Descripción', 
quantityPerUnit AS 'Presentación', 
unitPrice AS 'Precio Unitario'
FROM products;

SELECT productId, 
UCASE(productName) as productName, 
quantityPerUnit, 
unitPrice
FROM products;

SELECT productId as 'Código', 
productName AS 'Descripción', 
replace(quantityPerUnit, 'boxes', 'cajas') AS 'Presentación', 
unitPrice AS 'Precio Unitario'
FROM products;

SELECT productId as 'Código', 
productName AS 'Descripción', 
replace(quantityPerUnit, 'boxes', 'cajas') AS 'Presentación', 
unitPrice AS 'Precio Unitario'
FROM products WHERE quantityPerUnit LIKE '%boxes%';
