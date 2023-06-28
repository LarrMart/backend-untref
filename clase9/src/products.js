const fileManager = require("./fileManager.js");
const path        = require("path");
let products      = undefined;
let filePath      = path.join(__dirname, "/database/frutas.json");

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


//interface
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
	let ret = "Se agregó el producto satifactoriamente";
	if(hasSameKeys(prod)) {
		if(!isInList(prod)) {
			products.push(prod);
			fileManager.save(filePath, JSON.stringify(products));
		}
		ret = "El ID del producto ya existe en la base de datos";
	} else {
		ret = "No se agregó el producto. Formatee correctamente los datos."
	}
	return ret;
}

// load();
// add({"id":18, "imagen": undefined, "nombre": "Guillermo", "importe": 3000, "stock": 1});

// console.log(list());

module.exports = {add, load, getProductsByName, getProductByID, list};