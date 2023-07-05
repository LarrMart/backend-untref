const products = require("./products.js");
const express  = require('express');
const PORT     = process.env.PORT || 3000;
const app      = express();

app.use((req, res, next) => {
	res.header("Content-Type", "application/json; charset=utf-8");
	next();
});

app.get("/", (req, res) => {
	res.status(200).send("Bienvenido a la API de frutas");
});

app.listen(PORT, () => {
	console.log(`Servidor iniciado en el puerto ${PORT}`);
});