const fileManager = require("./fileManager.js");
const path = require("path");
let productos = undefined;

const sinCoincidencias = () => [{id: "error", descripcion: "No se encontraron coincidencias"}];

const cargar = () => {
	productos = JSON.parse(fileManager.leerArchivo(path.join(__dirname, "database/products.json")));
}

const listar = () => productos;
	
const getProductoPorID = id => {
	let productoEncontrado = undefined;
	if(parseInt(id))
		productoEncontrado = productos.find(producto => producto.id == id);
	return productoEncontrado !== undefined ? [productoEncontrado] : sinCoincidencias();
}

const getProductosPorNombre = nombre => {
	const productosEncontrados = productos.filter(producto => new RegExp(nombre, "i").test(producto.nombre));
	return productosEncontrados.length !== 0 ? productosEncontrados : sinCoincidencias();
}

module.exports = {cargar, getProductosPorNombre, getProductoPorID, listar};