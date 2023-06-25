const productos = [
	{id: 1, nombre: 'Notebook 14 FHD', importe: 115000, stock: 4},
	{id: 2, nombre: 'Tablet PAD 9.7"', importe: 195000, stock: 8},
	{id: 3, nombre: 'Macbook Air 13', importe: 745000, stock: 1},
	{id: 4, nombre: 'Tablet DROID 10.1', importe: 165000, stock: 10},
	{id: 5, nombre: 'Smartwatch 1.8" black', importe: 22500, stock: 18},
	{id: 6, nombre: 'Smartwatch 2 red', importe: 24200, stock: 25}
];

const sinCoincidencias = () => [{id: "error", descripcion: "No se encontraron coincidencias"}];

const getProductoPorID = id => {
	let productoEncontrado = undefined;
	if(parseInt(id))
		productoEncontrado = productos.find(producto => producto.id == id);
	return productoEncontrado === undefined ? [productoEncontrado] : sinCoincidencias();
}

const getProductosPorNombre = nombre => {
	const productosEncontrados = productos.filter(producto => new RegExp(nombre, "i").test(producto.nombre));
	return productosEncontrados.length !== 0 ? productosEncontrados : sinCoincidencias();
}

module.exports.listado               = productos;
module.exports.getProductoPorID      = getProductoPorID;
module.exports.getProductosPorNombre = getProductosPorNombre;