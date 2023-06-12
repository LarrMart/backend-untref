const cursos = [
    {id: 1, nombre: "JavaScript", categoria: "Programación"},
    {id: 2, nombre: "React JS", categoria: "Programación"},
    {id: 3, nombre: "Vue JS", categoria: "Programación"},
    {id: 4, nombre: "SQL", categoria: "Datos"},
    {id: 5, nombre: "MongoDB", categoria: "Datos"},
    {id: 6, nombre: "ECommerce", categoria: "Producto"},
    {id: 7, nombre: "Customer Experience", categoria: "Producto"}
];

const uniformizar = (categoria) => {
	let ret = undefined;
	if(new RegExp("programaci[oó]n", "i"))
		ret = "Programación";
	else if(new RegExp("datos", "i"))
		ret = "Datos";
	else if(new RegExp("producto", "i"))
		ret = "Producto";
	return ret;
}

const getOferta = categoria => {
	let parametro = uniformizar(categoria);
	const filtrados = cursos.filter(curso => curso.categoria === parametro);
	return filtrados || [{id: "Error", descripcion: "No se encontraron coincidencias"}];
}

exports.cursos = cursos;
exports.obtenerCursos = getOferta;