const express    = require('express');
const path       = require('path');
const dotenv     = require('dotenv');

const products   = require('./products.js');

dotenv.config();
products.load();

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, process.env.VIEWS_PATH));
app.use(express.json())

app.get("/", (req, res) => res.json("Inicio"));

app.post("/", (req, res) => {
	console.log(req.body);
	res.json(products.add(req.body));
});

app.get("/frutas", (req, res) => {
	res.json(products.list());
});

app.listen(PORT, () => {
	console.log(`Servidor iniciado en el puerto ${PORT}.`);
});