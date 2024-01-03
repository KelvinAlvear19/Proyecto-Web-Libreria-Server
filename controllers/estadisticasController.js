const Estadistica = require("../models/estadisticaModel");


exports.loadEstadisticas = async (request, response) => {
    try {
        const estadisticas = await Estadistica.find();
        response.json(estadisticas);
    } catch (error) {
        console.log(error);
        response.status(500).send("Error al cargar los registros");
    }
};


exports.addEstadistica = async (request, response) => {
    try {
        let estadistica;
        estadistica = new Estadistica(request.body);
        await estadistica.save();
        response.send(estadistica);
    } catch (error) {
        console.log(error);
        response.status(500).send("Error al insertar el registro");
    }
};
exports.loadEstadistica = async (request, response) => {
    try {
        let estadistica = await Estadistica.findById(request.params.id);
        if (!estadistica) {
            response.status(500).send("No existe la agencia");
        }
        response.json(estadistica);
    } catch (error) {
        console.log(error);
        response.status(500).send("Error al cargar el registro");
    }
};

exports.deleteEstadistica = async (request, response) => {
    try {
        let estadistica = await Estadistica.findById(request.params.id);
        if (!estadistica) {
            response.status(500).send("No existe la estadistica");
        }
        await Estadistica.findOneAndDelete({ _id: request.params.id });
        response.json({ msg: "Estadistica eliminada" });
    } catch (error) {
        console.log(error);
        response.status(500).send("Error al eliminar la Estadistica");
    }
};

exports.updateEstadistica = async (request, response) => {
    try {
        const { name, descripcion } = request.body;
        let estadistica = await Estadistica.findById(request.params.id);
        if (!estadistica) {
            response.status(500).send("No existe la estadistica");
        }
        estadistica.name = name;
        estadistica.descripcion = descripcion;

        estadistica = await Estadistica.findOneAndUpdate({ _id: request.params.id }, estadistica, {
            new: true,
        });
        response.json(estadistica);
    } catch (error) {
        console.log(error);
        response.status(500).send("Error al actualizar la estadistica");
    }
};
