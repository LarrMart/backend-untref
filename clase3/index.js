const http = require("http")
const PORT = 3000

const server = http.createServer((req, res) => {
	
	const contType = {
		textHtml  : {'Content-Type': 'text/HTML; charset=utf8'},
		textPlain : {"Content-Type": "text/plain; charset=utf8"},
		appJSON   : {"Content-Type": "application/JSON"}
	}
	
	switch(req.url) {
		case "/": 
			res.writeHead(200, contType.textHtml) 
			res.end("<h1>Bienvenidos a nuestra WEB</h1>")
			break
			
		case "/cursos":
			res.writeHead(200, contType.textHtml)
			res.end("<h1>Bienvenidos a nuestra sección de cursos</h1>")
			break
			
		case "/contacto":
			res.writeHead(200, contType.textHtml) 
			res.end("<h1>argentinaprograma@gmail.com</h1>")
			break
			
		default: 
			res.writeHead(404, contType.appJSON)
			res.end('{"error": "404","description" : "No se encuentra el recurso solicitado"}');			
			break
	}
})

server.listen(PORT, () => {
	console.log(`Servidor iniciado en el puerto ${PORT}`)
})