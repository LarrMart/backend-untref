const db_connector = require("./database/database_connector.js");

const list = async () => {
	let ret        = connectionFailed;
	const client   = await db_connector.connect();
	if(client) {
		const db = client.db("products");
		const frutas = await db.collection("fruits").find().toArray();
		ret = {"result": frutas, "status": 200}
		
		await db_connector.disconnect()	;
	}
	return ret;
}
	
const getProductsByName = async name => {
	let ret = connectionFailed;
	const client = await db_connector.connect();
	if(client) {
		const db = client.db("products");
		const fruits = await db.collection("fruits").find({"nombre": {$regex: name, $options: "i"}}).toArray();
		ret = fruits.length !== 0 ? {"result": fruits, "status": 200} : noMatches();
		
		await db_connector.disconnect()	;
	}
	return ret;
}

const getProductById = async id => {
	let ret = {"result": "error", "status": 409, "description": "El id tiene que ser un número entero positivo"};
	id = parseInt(id);

	if(id && id > 0) {
		const client   = await db_connector.connect();
		ret = connectionFailed;
		if(client) {
			const db = client.db("products");
			const fruits = await db.collection("fruits").find({"id": id}).toArray();
			ret = fruits.length !== 0 ? {"result": fruits, "status": 200} : noMatches();
			
			await db_connector.disconnect()	;
		}
	}
		
	return ret;
}


const getProductsByPrice = async price => {
	let ret = {"result": "error", "status": 409, "description": "El precio tiene que ser un número."};
	price = parseInt(price);

	if(price) {
		const client   = await db_connector.connect();
		ret = connectionFailed;
		if(client) {
			const db = client.db("products");
			const fruits = await db.collection("fruits").find({"importe": {$gte: price} }).toArray();
			ret = fruits.length !== 0 ? {"result": fruits, "status": 200} : noMatches();
			
			await db_connector.disconnect()	;
		}
	}
		
	return ret;
}

const add = async prod => {
	let ret = undefined;
	if(hasSameKeys(prod)) {
		const client = await db_connector.connect();
		if(client) {
			const fruitsCollection = client.db("products").collection("fruits");
			const search = await fruitsCollection.find({nombre: prod.nombre}).toArray();


			// Si el prod. NO está en la BD, lo agrego
			if(search.length === 0) {
				await fruitsCollection.insertOne(prod);
				ret = {"result": "Producto agregado", "status": 200};
			} else 													  
				ret = {"result": "error", "status": 400, "description": "No se agregó el producto, este ya existe en la base de datos."};

			await db_connector.disconnect();
		} else {
			ret = connectionFailed;
		}
		
	} else {
		ret = {"result": "error", "status": 409, "description": "No se agregó el producto. Formatee correctamente los datos."};
	}
	return ret;
}

const update = async (id, prod) => {
	let ret = {"result": "error", "status": 409, "description": "El id tiene que ser un número entero positivo."};
	id = parseInt(id);
	if(id && id > 0) {
		if(hasSameKeys(prod)) {
			const client = await db_connector.connect();
			if(client) {
				const fruitsCollection = client.db("products").collection("fruits");
				const searchForId = await fruitsCollection.findOne({id: id});
				const searchForName = await fruitsCollection.findOne({nombre: prod.nombre});

				if(searchForId) { 
					if(searchForName === null) { // No hay otro prod con el mismo nombre
						await fruitsCollection.updateOne({id: id}, {$set: prod});
						ret = {"result": "Producto actualizado", "status": 200};
					} else {
						ret = {
							"result": "error",
					 		"status": 400,
					        "description": "No se actualizó la BD, el producto que desea actualizar ya se encuentra en la base de datos."
						};
					}

				} else {
					ret = {
							"result": "error",
					 		"status": 400,
					        "description": "No se actualizó la BD, el producto con el id proporcionado no existe."
					};
				}

				await db_connector.disconnect();
			} else {
				ret = connectionFailed;
			}
			
		} else {
			ret = {"result": "error", "status": 409, "description": "No se actualzó el producto. Formatee correctamente los datos."};
		}
	}
		
	return ret;
}

const remove = async id => {
	let ret = {"result": "error", "status": 409, "description": "El id tiene que ser un número entero positivo."};
	id = parseInt(id);

	if(id && id > 0) {
		const client   = await db_connector.connect();
		ret = connectionFailed;
		if(client) {
			const db = client.db("products");
			const result = await db.collection("fruits").deleteOne({"id": id});

			if(result.deletedCount !== 0)	
				ret = {"result": "Producto eliminado.", "status": 200};
			else
				ret = {"result": "error", "status": 404, "description": "No se encontró ningún producto con ese ID."};

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

module.exports = {add, remove, update, getProductsByName, getProductById, getProductsByPrice, list};