const products = require("./products.js");
const express  = require('express');
const PORT     = process.env.PORT || 3000;
const app      = express();

app.use(express.json());

app.get("/frutas/listado", async (req, res) => {
	const result = await products.list();
	res.status(result.status).json(result);
});

app.get("/frutas/nombre/:nombre", async (req, res) => {
	const result = await products.getProductsByName(req.params.nombre);
	res.status(result.status).json(result);
});

app.get("/frutas/id/:id", async (req, res) => {
	const result = await products.getProductById(req.params.id);
	res.status(result.status).json(result);
});

app.get("/frutas/precio/:precio", async (req, res) => {
	const result = await products.getProductsByPrice(req.params.precio);
	res.status(result.status).json(result);
});

app.post("/frutas/agregar", async (req, res) => {
	const result = await products.add(req.body);
	res.status(result.status).json(result);
});

app.put("/frutas/actualizar/:id", async (req, res) => {
	const result = await products.update(req.params.id, req.body);
	res.status(result.status).json(result);
});

app.delete("/frutas/eliminar/:id", async (req, res) => {
	const result = await products.remove(req.params.id);
	res.status(result.status).json(result);
});

app.all("*", (req, res) => {
	res.status(404).send("No se encuentra el recurso solicitado");
});

app.listen(PORT, () => {
	console.log(`Servidor iniciado en el puerto ${PORT}`);
});