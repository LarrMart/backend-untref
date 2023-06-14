const cursos = [
    {id: 1, nombre: "JavaScript", categoria: "Programación"},
    {id: 2, nombre: "React JS", categoria: "Programación"},
    {id: 3, nombre: "Vue JS", categoria: "Programación"},
    {id: 4, nombre: "SQL", categoria: "Datos"},
    {id: 5, nombre: "MongoDB", categoria: "Datos"},
    {id: 6, nombre: "ECommerce", categoria: "Producto"},
    {id: 7, nombre: "Customer Experience", categoria: "Producto"}
];

const uniformizarCategoria = categoria => {
	let ret = undefined;
	if(new RegExp("^programaci[oó]n$", "i").test(categoria))
		ret = "Programación";
	else if(new RegExp("^datos$", "i").test(categoria))
		ret = "Datos";
	else if(new RegExp("^producto$", "i").test(categoria))
		ret = "Producto";
	return ret;
};

const error = () => [{id: "Error", descripcion: "No se encontraron coincidencias"}]

const getOfertaPorID = id => {
    let cursoElegido = undefined;
    if(new RegExp(/\d+/).test(id)) { 
        id = parseInt(id);
        cursoElegido = cursos.find(curso => curso.id === id);
    }
	return cursoElegido || error();
};

const getOfertaPorCategoria = categoria => {
	let parametro = uniformizarCategoria(categoria);
	const cursosFiltrados = cursos.filter(curso => curso.categoria === parametro);
    console.log(cursosFiltrados)
	return cursosFiltrados.length !== 0 ? cursosFiltrados : error();
};

const getOfertaPorNombre = nombre => {
    let cursosElegidos = cursos.filter(curso => new RegExp(nombre, "i").test(curso.nombre));
    return cursosElegidos.length !== 0 ? cursosElegidos : error();
};

exports.cursos = cursos;
exports.getCursoPorNombre = getOfertaPorNombre;
exports.getCursosPorCategoria = getOfertaPorCategoria;
exports.getCursoPorID = getOfertaPorID;
