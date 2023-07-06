const products = require("./products.js");
const express  = require('express');
const PORT     = process.env.PORT || 3000;
const app      = express();

app.use((req, res, next) => {
	res.header("Content-Type", "application/json; charset=utf-8");
	next();
});

app.get("/frutas/listado", async (req, res) => {
	const result = await products.list();
	res.status(result.status).json(result.results);
});

app.get("/frutas/nombre/:nombre", async (req, res) => {
	const result = await products.getProductsByName(req.params.nombre);
	res.status(result.status).json(result.results);
});

app.get("/frutas/id/:id", async (req, res) => {
	const result = await products.getProductById(req.params.id);
	res.status(result.status).json(result.results);
});

app.get("/frutas/precio/:precio", async (req, res) => {
	const result = await products.getProductsByPrice(req.params.precio);
	res.status(result.status).json(result.results);
});

app.listen(PORT, () => {
	console.log(`Servidor iniciado en el puerto ${PORT}`);
});