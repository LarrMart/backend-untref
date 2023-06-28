const dotenv     = require('dotenv');
dotenv.config();
const express    = require('express');
const path       = require('path');
const products   = require('./products.js');
const app        = express();
const PORT       = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, process.env.VIEWS_PATH));
app.use(express.json())

products.load();

app.get("/:id", (req, res) => {
	res.json(products.getProductByID(req.params.id))
});

app.get("/frutas", (req, res) => {
	res.json(products.list());
});

app.post("/", (req, res) => {
	res.json(products.add(req.body));
});

app.put("/", (req, res) => {
	res.json(products.update(req.body));
});

app.delete("/:id", (req, res) => {
	res.json(products.remove(req.params.id));
});

app.get("*", (req, res) => {
	res.status(404).json({"id": "error", "descripcion": "El recurso solicitado no existe."});
});

app.listen(PORT, () => {
	console.log(`Servidor iniciado en el puerto ${PORT}.`);
});