const fileManager = require("./fileManager.js");
const path        = require("path");
let products      = undefined;
const dotenv	  = require("dotenv");
dotenv.config();
let filePath      = path.join(__dirname, process.env.DATABASE_PATH);

//INTERFAZ //--------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------

// PEDIDO EN EL PRÁCTICO
const getProductByID = id => {
	let productMatch = undefined;
	if(parseInt(id))
		productMatch = products.find(product => product.id == id);
	return productMatch !== undefined ? productMatch : noMatches();
}

// PEDIDO EN EL PRÁCTICO
const update = (id, prod) => {
	id = parseInt(id);
	let ret = undefined;
	if(hasSameKeys(prod)) {
		prod = {id: id, ...prod};
		let position = products.findIndex(product => product.id == id);
		if(position !== -1) {
			ret = prod;
			products.splice(position, 1, prod);
			fileManager.save(filePath, JSON.stringify(products));
		} else 
			ret = {"id": "error", "status": 404, "descripcion": "El producto que desea actualizar no se encuentra en la base de datos."};	
	} else 
		ret = {"id": "error", "status": 409, "descripcion": "No se actualizó el producto. Formatee correctamente los datos."};
	return ret;
}

// PEDIDO EN EL PRÁCTICO
const remove = id => {
	let position = products.findIndex(product => product.id == id);
	let ret = {"id": "error", "status": 404, "descripcion": "El producto que desea borrar no se encuentra en la base de datos."};
	if(position !== -1) {
		ret = products.splice(position, 1);
		fileManager.save(filePath, JSON.stringify(products));
	}	
	return ret;
}

const load = () => products = JSON.parse(fileManager.read(filePath));

const list = () => products;
	
const getProductsByName = name => {
	const productMatches = products.filter(product => new RegExp(name, "i").test(producto.nombre));
	return productMatches.length !== 0 ? productMatches : noMatches();
}

const add = prod => {
	let ret = undefined;
	if(hasSameKeys(prod)) {
		prod = {id: products.length + 1, ...prod};
		let position = products.findIndex(product => product.nombre == prod.nombre);
		if(position === -1) {
			ret = prod;
			products.push(prod);
			fileManager.save(filePath, JSON.stringify(products));
		} else
			ret = {"id": "error", "status": 400, "descripcion": "No se agregó el producto, este ya existe en la base de datos."};
	} else {
		ret = {"id": "error", "status": 409, "descripcion": "No se agregó el producto. Formatee correctamente los datos."};
	}
	return ret;
}

// -----------------------------------------------------------------------------------------------------------------------------
// Métodos privados ------------------------------------------------------------------------------------------------------------

const noMatches = () => ({"id": "error", "status": 404, "descripcion": "No se encontraron coincidencias"});

//revisa que el prod. tenga las claves esperadas y en el mismo orden.
const hasSameKeys = prod => {
	 const mandatoryKeys = ["imagen", "nombre", "importe", "stock"];
	 const prodKeys      = Object.keys(prod);
	 return mandatoryKeys.every((str, index) => str === prodKeys[index]);
}

module.exports = {add, load, getProductsByName, getProductByID, list, update, remove};