const axios = require("axios");
const { Driver, Team } = require("../db.js");

const getAllDrivers = async (req, res) => {
  try {
    // Obtén todos los conductores de la API
    const responseApi = await axios.get("http://localhost:5000/drivers");
    const allDriversApi = responseApi.data;


    const allDriversDb = await Driver.findAll({
      include: Team, 
    });


    const combinedDrivers = [...allDriversApi, ...allDriversDb];

    res.status(200).json(combinedDrivers);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los conductores" });
  }
};

module.exports = getAllDrivers;
