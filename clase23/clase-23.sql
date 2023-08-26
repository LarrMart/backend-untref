-- Resolución de los ejemplos vistos en las diapositivas de la clase 23


-- Esta consulta muestra los contactos que tienen teléfono
-- sino tienen no se muestran.


SELECT 
	c.nombreCompleto, 
	c.telefono, 
	t.descripcion

FROM contactos AS c
INNER JOIN tiposdetelefono AS t
ON c.idTipoTel = t.idTipoTel;

SELECT
        c.nombreCompleto,
        c.telefono,
        t.descripcion

FROM contactos AS c
LEFT JOIN tiposdetelefono AS t
ON c.idTipoTel = t.idTipoTel;

SELECT
        c.nombreCompleto,
        c.telefono,
        t.descripcion

FROM contactos AS c
RIGHT JOIN tiposdetelefono AS t
ON c.idTipoTel = t.idTipoTel;

SELECT  o.orderId, 
	o.productID, 
	p.productName, 
	o.unitprice,
	o.quantity,
	o.unitprice * o.quantity AS subtotal

FROM orderDetails AS o
INNER JOIN products AS p
ON o.productId = p.productId
WHERE o.orderId = '10255';




























