const Libro = require("../models/libroModel");


exports.loadLibros = async (request, response) => {
    try {
        const libros = await Libro.find();
        response.json(libros);
    } catch (error) {
        console.log(error);
        response.status(500).send("Error al cargar los registros");
    }
};


exports.addLibros = async (request, response) => {
    try {
        let libro;
        libro = new Libro(request.body);
        await libro.save();
        response.send(libro);
    } catch (error) {
        console.log(error);
        response.status(500).send("Error al insertar el registro");
    }
};
exports.loadLibro = async (request, response) => {
    try {
        let libro = await Libro.findById(request.params.id);
        if (!libro) {
            response.status(500).send("No existe el libro");
        }
        response.json(libro);
    } catch (error) {
        console.log(error);
        response.status(500).send("Error al cargar el registro");
    }
};

exports.deleteLibro = async (request, response) => {
    try {
        let libro = await Libro.findById(request.params.id);
        if (!libro) {
            response.status(500).send("No existe la agencia");
        }
        await Libro.findOneAndDelete({ _id: request.params.id });
        response.json({ msg: "Libro eliminado" });
    } catch (error) {
        console.log(error);
        response.status(500).send("Error al eliminar el registro");
    }
};

exports.updateLibro = async (request, response) => {
    try {
        const { name, description } = request.body;
        let libro = await Libro.findById(request.params.id);
        if (!libro) {
            response.status(500).send("No existe el Libro");
        }
        libro.name = name;
        libro.description = description;

        libro = await Libro.findOneAndUpdate({ _id: request.params.id }, libro, {
            new: true,
        });
        response.json(libro);
    } catch (error) {
        console.log(error);
        response.status(500).send("Error al actualizar el libro");
    }
};
