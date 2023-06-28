const fileManager = require("./fileManager.js");
const path        = require("path");
let products      = undefined;
const dotenv	  = require("dotenv");
dotenv.config();
let filePath      = path.join(__dirname, process.env.DATABASE_PATH);

const noMatches = () => [{id: "error", descripcion: "No se encontraron coincidencias"}];

//revisa que el prod. tenga las claves esperadas y en el mismo orden.
const hasSameKeys = prod => {
	 const mandatoryKeys = ["id", "imagen", "nombre", "importe", "stock"];
	 const prodKeys      = Object.keys(prod);
	 return mandatoryKeys.every((str, index) => str === prodKeys[index]);
}

const isInList = prod => {
	return products.findIndex(product => product.id === prod.id) !== -1;
}


//interface --------------------------------------------------------------------------------------------------------------------------
const load = () => {
	products = JSON.parse(fileManager.read(filePath));
}

const list = () => products;
	
const getProductByID = id => {
	let productMatch = undefined;
	if(parseInt(id))
		productMatch = products.find(product => product.id == id);
	return productMatch !== undefined ? [productMatch] : noMatches();
}

const getProductsByName = name => {
	const productMatches = products.filter(product => new RegExp(name, "i").test(producto.nombre));
	return productMatches.length !== 0 ? productMatches : noMatches();
}

const add = prod => {
	let ret = prod;
	if(hasSameKeys(prod)) {
		if(!isInList(prod)) {
			products.push(prod);
			fileManager.save(filePath, JSON.stringify(products));
		}
		ret = {"id": "error", "descripcion": "No se agregó el producto. El ID ya existe en la base de datos"};
	} else {
		ret = {"id": "error", "descripcion": "No se agregó el producto. Formatee correctamente los datos."};
	}
	return ret;
}

const update = prod => {
	let ret = prod;
	if(hasSameKeys(prod)) {
		let position = products.findIndex(product => product.id == prod.id);
		if(position !== -1) {
			products.splice(position, 1, prod);
			fileManager.save(filePath, JSON.stringify(products));
		} else {
			ret = {"id": "error", "descripcion": "El producto que desea actualizar no se encuentra en la base de datos."};
		}	
	} else {
		ret = {"id": "error", "descripcion": "No se actualizó el producto. Formatee correctamente los datos."};
	}
	return ret;
}

const remove = id => {
	let position = products.findIndex(product => product.id == id);
	let ret = {"id": "error", "descripcion": "El producto que desea borrar no se encuentra en la base de datos."};
	if(position !== -1) {
		ret = products.splice(position, 1);
		fileManager.save(filePath, JSON.stringify(products));
	}	
	return ret;
}

module.exports = {add, load, getProductsByName, getProductByID, list, update, remove};