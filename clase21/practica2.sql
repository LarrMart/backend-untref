USE northwind;

SELECT employeeId, titleOfCourtesy,
lastName, firstName, title, birthDate, hireDate
FROM employees;

SELECT employeeId, 
concat(titleOfCourtesy, " ", lastName, " ", firstName) AS "Nombre Completo",
title, date(birthDate) as "FechaNacimiento",
YEAR(hireDate) AS "AnioContratación"
FROM employees;

