const axios = require("axios");
const { Driver } = require("../db.js");

const getAllDrivers = async (req, res) => {
  try {
    const responseApi = await axios.get("http://localhost:5000/drivers");
    const allDriversApi = responseApi.data;
  
    const allDriversDb = await Driver.findAll();
  
  
    const combinedDrivers = [...allDriversApi, ...allDriversDb];
  
    res.status(200).json(combinedDrivers);
  } catch (error) {
    console.error("Error al obtener los conductores:", error);
    res.status(500).json({ error: "Error al obtener los conductores" });
  }
};

module.exports = getAllDrivers;
