const express = require('express');
const app = express();
const PORT = 3050;


app.get('/', (req, res) => {
	res.send("<h1>¿Cómo va?</h1>");
});

app.use((req, res) => {
	res.status(404).send({"error": "404", "description": "No se encuentra la ruta o recurso especificado"});	
});

app.listen(PORT, () => {
	console.log(`Servidor iniciado en el puerto ${PORT}`);
});