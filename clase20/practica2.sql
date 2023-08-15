use northwind;

SELECT * FROM products ORDER BY productName;

SELECT * FROM products
WHERE categoryId = 4 OR categoryId = 6
ORDER BY productName;

SELECT * FROM products
WHERE supplierId = 5 AND categoryId = 4
ORDER BY productName;

SELECT * FROM products
WHERE unitsInStock BETWEEN 25 AND 40
ORDER BY productName;

SELECT * FROM products
WHERE unitsInStock > 400 OR discontinued = TRUE
ORDER BY productName;
