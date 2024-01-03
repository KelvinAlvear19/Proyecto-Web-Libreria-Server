const Catalogo = require("../models/catalogoModel");


exports.loadCatalogos = async (request, response) => {
  try {
    const catalogos = await Catalogo.find();
    response.json(catalogos);
  } catch (error) {
    console.log(error);
    response.status(500).send("Error al cargar los registros");
  }
};


exports.addCatalogo = async (request, response) => {
  try {
    let catalogo;
    catalogo = new Catalogo(request.body);
    await catalogo.save();
    response.send(catalogo);
  } catch (error) {
    console.log(error);
    response.status(500).send("Error al insertar el registro");
  }
};
exports.loadCatalogo = async (request, response) => {
  try {
    let catalogo = await Catalogo.findById(request.params.id);
    if (!catalogo) {
      response.status(500).send("No existe la agencia");
    }
    response.json(catalogo);
  } catch (error) {
    console.log(error);
    response.status(500).send("Error al cargar el registro");
  }
};

exports.deleteCatalogo = async (request, response) => {
  try {
    let catalogo = await Catalogo.findById(request.params.id);
    if (!catalogo) {
      response.status(500).send("No existe la agencia");
    }
    await Catalogo.findOneAndDelete({ _id: request.params.id });
    response.json({ msg: "Agencia eliminada" });
  } catch (error) {
    console.log(error);
    response.status(500).send("Error al eliminar el registro");
  }
};

exports.updateCatalogo = async (request, response) => {
  try {
    const { name, address } = request.body;
    let catalogo = await Catalogo.findById(request.params.id);
    if (!catalogo) {
      response.status(500).send("No existe la agencia");
    }
    catalogo.name = name;
    catalogo.adress = address;

    catalogo = await Catalogo.findOneAndUpdate({ _id: request.params.id }, catalogo, {
      new: true,
    });
    response.json(catalogo);
  } catch (error) {
    console.log(error);
    response.status(500).send("Error al actualizar el registro");
  }
};
