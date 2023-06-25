const express = require("express");
const productos = require("./productos.js");
const PORT = 3000;
const app = express();

app.get("/productos", (req, res) => {
	res.json(productos.listado);
});

app.get("/productos/id/:id", (req, res) => {
	res.json(productos.getProductoPorID(req.params.id));
});

app.get("/productos/nombres/:nombre", (req, res) => {
	res.json(productos.getProductosPorNombre(req.params.nombre));
});

app.get("/*", (req, res) => {
	res.send("La ruta solicitada no existe.");
});

app.listen(PORT, () => {
	console.log(`Servidor iniciado en el puerto ${PORT}.`);
});

// app.get("/productos/:valor", (req, res) => {
	// const parametro = req.params.valor;
	// if(parseInt(parametro)) 
		// res.json(productos.getProductoPorID(parametro));
	// else 
		// res.json(productos.getProductosPorNombre(parametro));
// });
