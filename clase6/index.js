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

app.get("/curso/nombre/:nombre", (req, res) => {
    res.json(cursos.getCursoPorNombre(req.params.nombre));
});

app.get("/curso/codigo/:id", (req, res) => {
    res.json(cursos.getCursoPorID(req.params.id))
});

app.get("/cursos/:categoria", (req, res) => {
    res.json(cursos.getCursosPorCategoria(req.params.categoria));
});

app.get("/*", (req, res) => {
    res.status(404).send("Lo siento, la página que buscas no existe.");
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});

