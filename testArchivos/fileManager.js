const fs = require("fs");

const leerArchivo = filename => {
	let f = undefined;
	try {
		 f = fs.readFileSync(filename.trim(), "utf8");
	}
	catch(err) {
		console.log(err);
	}
	return f;
}

module.exports.leerArchivo = leerArchivo;