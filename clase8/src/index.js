const express   = require("express");
const app 	    = express();
const path 	    = require("path");
const productos = require("./products.js");
const PORT      = 3000;

productos.cargar();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/productos", (req, res) => {
	res.render("productos", {productos: productos.listar()});
});

app.get("/productos/id/:id", (req, res) => {
	res.render("productos", {productos: productos.getProductoPorID(req.params.id)});   
});

app.get("/productos/nombres/:nombre", (req, res) => {
	res.render("productos", {productos: productos.getProductosPorNombre(req.params.nombre)}); 
});

app.get("*", (req, res) => {
	res.status(404).render("error.ejs");
});

app.listen(PORT, () => {
	console.log(`Servidor iniciado en puerto ${PORT}`);
});