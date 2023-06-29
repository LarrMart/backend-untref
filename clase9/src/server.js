const dotenv     = require('dotenv');
dotenv.config();
const express    = require('express');
const path       = require('path');
const products   = require('./products.js');
const app        = express();
const PORT       = process.env.PORT || 3000;

app.use(express.json())
products.load();

//--------------------------------------------- Rutas pedidas en el TP -----------------------------

app.get("/fruta/:id", (req, res) => {
	const result = products.getProductByID(req.params.id);
	res.status(result.status || 200).json(result);
});

app.put("/:id", (req, res) => { 
	const result = products.update(req.params.id, req.body);
	res.status(result.status || 200).json(result);
});

app.delete("/:id", (req, res) => {
	const result = products.remove(req.params.id);
	res.status(result.status || 200).json(result);
});

//--------------------------------------------------------------------------------------------------------

app.post("/", (req, res) => {
	const result = products.add(req.body);
	res.status(result.status || 201).json(result);
});

app.get("/fruta/:nombre", (req, res) => {
	const result = products.getProductsByName(req.params.nombre);
	res.status(result.status || 200).json(result);
});

app.get("/frutas", (req, res) => {
	res.status(200).json(products.list());
});

app.get("*", (req, res) => {
	res.status(404).json({"id": "error", "descripcion": "El recurso solicitado no existe."});
});

app.listen(PORT, () => {
	console.log(`Servidor iniciado en el puerto ${PORT}.`);
});