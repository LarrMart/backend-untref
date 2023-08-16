USE northwind;

SELECT productId, categoryId, productName, unitPrice, unitsInStock, reorderLevel
FROM products;

SELECT productId, categoryId, productName, unitPrice, unitsInStock, reorderLevel
FROM products ORDER BY categoryId, productName;

SELECT productId, 
       categoryId, 
       productName, 
       unitPrice, 
       unitsInStock, 
       reorderLevel,

CASE

  WHEN unitsInStock < reorderLevel THEN
	'Reponer stock'
  ELSE
	unitsInStock

END AS unitsInStock

FROM products ORDER BY productName;

SELECT productId,
       productName,
       unitPrice,
       unitsInStock,
       reorderLevel
       FROM products
       WHERE categoryId = (
		SELECT categoryId FROM categories WHERE categoryName = 'Seafood'
	)
       ORDER BY categoryId, productName;
