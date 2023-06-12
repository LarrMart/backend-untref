const express = require('express');
const app = express();
const PORT = 3050;


app.get('/', (req, res) => {
	res.send("<h1>Qué hacé papá</h1>");
});

app.use((req, res) => {
	res.status(404).send({"error": "404", "description": "No se encuentra la ruta o recurso especificado"});
	
	// send("<h1>La pifiaste papá me pa' que estás escabio de vuelta</h1>");
})

app.listen(PORT, () => {
	console.log(`Servidor iniciado en el puerto ${PORT}`);
});