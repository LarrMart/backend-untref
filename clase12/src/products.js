const db_connector = require("./database/database_connector.js");

const list = async () => {
	let ret        = connectionFailed;
	const client   = await db_connector.connect();
	if(client) {
		const db = client.db("products");
		const frutas = await db.collection("frutas").find().toArray();
		ret = {"results": frutas, "status": 200}
		console.log(ret);
		await db_connector.disconnect()	;
	}
	return ret;
}
	
const getProductsByName = async name => {
	let ret = connectionFailed;
	const client = await db_connector.connect();
	if(client) {
		const db = client.db("products");
		const frutas = await db.collection("frutas").find({"nombre": {$regex: name, $options: "i"}}).toArray();
		ret = frutas.length !== 0 ? {"results": frutas, "status": 200} : noMatches();
		console.log(ret);
		await db_connector.disconnect()	;
	}
	return ret;
}

const getProductById = async id => {
	let ret = {"result": "error", "status": 409, "id": "El id tiene que ser un número entero"};
	id = parseInt(id);

	if(id) {
		const client   = await db_connector.connect();
		ret = connectionFailed;
		if(client) {
			const db = client.db("products");
			const frutas = await db.collection("frutas").find({"id": id}).toArray();
			ret = frutas.length !== 0 ? {"results": frutas, "status": 200} : noMatches();
			console.log(ret);
			await db_connector.disconnect()	;
		}
	}
		
	return ret;
}


const getProductsByPrice = async price => {
	let ret = {"result": "error", "status": 409, "id": "El precio tiene que ser un número."};
	price = parseInt(price);

	if(price) {
		const client   = await db_connector.connect();
		ret = connectionFailed;
		if(client) {
			const db = client.db("products");
			const frutas = await db.collection("frutas").find({"importe": {$gte: price} }).toArray();
			ret = frutas.length !== 0 ? {"results": frutas, "status": 200} : noMatches();
			console.log(ret);
			await db_connector.disconnect()	;
		}
	}
		
	return ret;
}

const noMatches = () => ({"result": "error", "status": 404, "description": "No se encontraron coincidencias"});

const connectionFailed = {"result": "error", "status": 500, "description": "No fue posible conectarse con la base de datos"};

//revisa que el prod. tenga las claves esperadas y en el mismo orden.
const hasSameKeys = prod => {
	 const mandatoryKeys = ["imagen", "nombre", "importe", "stock"];
	 const prodKeys      = Object.keys(prod);
	 return mandatoryKeys.every((str, index) => str === prodKeys[index]);
}

module.exports = {add, getProductsByName, getProductById, getProductsByPrice, list, update, remove};