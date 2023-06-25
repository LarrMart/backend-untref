const express = require("express");
const productos = require("./productos.js");
const path = require("path");
const app = express();
const PORT = 3000;


app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "views")));
console.log(__dirname);

app.get("/productos", (req, res) => {
	res.json(productos.listado);
});

app.get("/productos/id/:id", (req, res) => {
	// res.json(productos.getProductoPorID(req.params.id));
	res.render("producto", {productos: productos.getProductoPorID(req.params.id)});   
});

app.get("/productos/nombres/:nombre", (req, res) => {
	// res.json(productos.getProductosPorNombre(req.params.nombre));
	res.render("producto", {productos: productos.getProductosPorNombre(req.params.nombre)}); 
});

app.get("/*", (req, res) => {
	res.send("La ruta solicitada no existe.");
});



app.listen(PORT, () => {
	console.log(`Servidor iniciado en el puerto ${PORT}.`);
});

