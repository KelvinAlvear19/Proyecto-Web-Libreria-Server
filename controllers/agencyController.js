const Agency = require("../models/agencyModel");

exports.addAgency = async (request, response) => {
  try {
    let agency;
    agency = new Agency(request.body);
    await agency.save();
    response.send(agency);
  } catch (error) {
    console.log(error);
    response.status(500).send("Error al insertar el registro");
  }
};

exports.loadAgencies = async (request, response) => {
  try {
    const agencys = await Agency.find();
    response.json(agencys);
  } catch (error) {
    console.log(error);
    response.status(500).send("Error al cargar los registros");
  }
};

exports.loadAgency = async (request, response) => {
  try {
    let agency = await Agency.findById(request.params.id);
    if (!agency) {
      response.status(500).send("No existe la agencia");
    }
    response.json(agency);
  } catch (error) {
    console.log(error);
    response.status(500).send("Error al cargar el registro");
  }
};

exports.deleteAgency = async (request, response) => {
  try {
    let agency = await Agency.findById(request.params.id);
    if (!agency) {
      response.status(500).send("No existe la agencia");
    }
    await Agency.findOneAndDelete({ _id: request.params.id });
    response.json({ msg: "Agencia eliminada" });
  } catch (error) {
    console.log(error);
    response.status(500).send("Error al eliminar el registro");
  }
};

exports.updateAgency = async (request, response) => {
  try {
    const { name, address } = request.body;
    let agency = await Agency.findById(request.params.id);
    if (!agency) {
      response.status(500).send("No existe la agencia");
    }
    agency.name = name;
    agency.adress = address;

    agency = await Agency.findOneAndUpdate({ _id: request.params.id }, agency, {
      new: true,
    });
    response.json(agency);
  } catch (error) {
    console.log(error);
    response.status(500).send("Error al actualizar el registro");
  }
};
