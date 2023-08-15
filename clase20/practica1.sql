USE northwind;

SELECT * FROM customers WHERE city = 'Buenos Aires';

SELECT customerId, companyName, contactName, contactTitle FROM customers
WHERE city = 'London';


SELECT * FROM employees WHERE title = 'Sales Representative' 
ORDER BY city DESC;

SELECT lastName, firstName, title, city FROM employees
WHERE country = 'USA'
ORDER BY lastName;


SELECT supplierID, companyName, contactName FROM suppliers
WHERE contactTitle = 'Accounting Manager';
