const express = require("express");
const app = express();
const PORT = 3000;

let pagesTitles = ["Home", "Productos"];

let products = [
        {name: "Notebook Lenova", price: 720},
        {name: "Mackbook Air 18", price: 1250},
        {name: "Tablet Droid 10.1", price: 350}
]

app.set("view engine", 'ejs');
app.use(express.static('views'));

app.get("/", (req, res) => {
    
	const data = {
        pageTitle: pagesTitles[0],
        title: 'Mi sitio web con EJS',
        message: "Bienvenido a mi sitio web generado a partir de un motor de plantillas"
    }
    
	res.render("index", data);
});

app.get('/productos', (req, res) => {
    
    let products = [
        {name: "Notebook Lenova", price: 720},
        {name: "Mackbook Air 18", price: 1250},
        {name: "Tablet Droid 10.1", price: 350}
    ]
    
    const data = {
        products: products,
        pageTitle: pagesTitles[1],
        title: 'Mi sitio web con EJS',
        message: "Bienvenido a mi sitio web generado a partir de un motor de plantillas"
    }
    
    res.render("productos", data);
})

app.get('/productos2', (req, res) => {
    
    const data = {
        products: products,
        pageTitle: pagesTitles[1],
        title: 'Mi sitio web con EJS',
        message: "Desafío de la clase 5"
    }
    
    res.render("productos2", data);
})

app.get("*", (req, res) => {
    res.status(404).render("not-found", {pageTitle: "Not Found"});
})

app.listen(PORT, () => {
	console.log(`Servidor iniciado en puerto ${3000}`);
});