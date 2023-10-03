const axios = require("axios");

const getAllDrivers = async (req, res) => {
  try {
    const response = await axios.get("http://localhost:5000/drivers");
    const allDrivers = response.data;

    res.status(200).json(allDrivers);
  } catch (error) {
    console.error("Error al obtener los conductores:", error);
    res.status(500).json({ error: "Error al obtener los conductores" });
  }
};

module.exports = getAllDrivers;
