const Resenia = require("../models/reseniaModel");


exports.loadResenias = async (request, response) => {
    try {
        const resenias = await Resenia.find();
        response.json(resenias);
    } catch (error) {
        console.log(error);
        response.status(500).send("Error al cargar los registros");
    }
};


exports.addResenia = async (request, response) => {
    try {
        let resenia;
        resenia = new Resenia(request.body);
        await resenia.save();
        response.send(resenia);
    } catch (error) {
        console.log(error);
        response.status(500).send("Error al insertar el registro");
    }
};
exports.loadResenia = async (request, response) => {
    try {
        let resenia = await Resenia.findById(request.params.id);
        if (!resenia) {
            response.status(500).send("No existe la agencia");
        }
        response.json(resenia);
    } catch (error) {
        console.log(error);
        response.status(500).send("Error al cargar el registro");
    }
};

exports.deleteResenia = async (request, response) => {
    try {
        let resenia = await Resenia.findById(request.params.id);
        if (!resenia) {
            response.status(500).send("No existe la resenia");
        }
        await Resenia.findOneAndDelete({ _id: request.params.id });
        response.json({ msg: "Resenia eliminada" });
    } catch (error) {
        console.log(error);
        response.status(500).send("Error al eliminar la resenia");
    }
};

exports.updateResenia = async (request, response) => {
    try {
        const { name, resenias } = request.body;
        let resenia = await Resenia.findById(request.params.id);
        if (!resenia) {
            response.status(500).send("No existe la resenia");
        }
        resenia.name = name;
        resenia.resenias = resenias;

        resenia = await Resenia.findOneAndUpdate({ _id: request.params.id }, resenia, {
            new: true,
        });
        response.json(resenia);
    } catch (error) {
        console.log(error);
        response.status(500).send("Error al actualizar la resenia");
    }
};
