const express = require('express');
const cursos = require("./cursos.js");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Bienvenidos al servidor web con rutas dinámicas");
});

app.get("/cursos", (req, res) => {
    res.json(cursos.cursos);
});

app.get("/cursos/:categoria", (req, res) => {
    console.log(req.params["categoria"]);
    res.json(
        cursos.obtenerCursos(req.params.categoria)
    );
});

app.get("*", (req, res) => {
    res.status(404).send("Lo siento, la página que buscas no existe.");
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});

