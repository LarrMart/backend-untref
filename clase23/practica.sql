SELECT 
	o.productId,
	p.productName,
	o.quantity,
	o.unitprice

FROM orderDetails AS O
INNER JOIN products AS p
ON o.productId = p.productId
WHERE o.orderID = '10255';

SELECT
	o.orderId,
	c.companyName,
	CONCAT(e.firstName, ' ', e.lastname) AS 'Ejecutivo de cuentas'

FROM orders AS o

INNER JOIN customers AS c
ON o.customerId = c.customerId

INNER JOIN employees AS e
ON o.employeeId = e.employeeId;

-- visualizar los productos en función de los nombres
-- de los proveedores

SELECT
	p.productId,
	p.productName,
	s.companyName,
	s.contactName

FROM products AS p

INNER JOIN suppliers AS s
ON p.supplierId = s.supplierID
WHERE p.categoryId = '7'
ORDER BY s.companyName;
