const axios = require("axios");
const { Driver } = require("../db.js");
const { Op } = require("sequelize");

const get15Drivers = async (req, res) => {
  const { forename } = req.query;
  const limit = 15;

  try {
    const drivers = await Driver.findAll({
      where: {
        forename: {
          [Op.iLike]: `%${forename}%`, 
        },
      },
      limit: limit,
    });

    if (drivers.length > 0) {
      res.status(200).json(drivers);
    } else {
 
      const response = await axios.get("http://localhost:5000/drivers");
      const responseData = response.data;
      const reslFilter = responseData.filter(
        (driverData) => driverData.name.forename.toLowerCase() === forename.toLowerCase() 
      );

      if (reslFilter.length > 0) {
        const limitedResults = reslFilter.slice(0, 15);
        res.status(200).json(limitedResults);
      } else {
        throw new Error("Conductor/es no encontrado/s");
      }
    }
  } catch (error) {
    if (error.response) {
      console.error("Respuesta de la API externa:", error.response.data);
      res.status(error.response.status).json({ error: error.response.data });
    } else if (error.request) {
      console.error("No se pudo hacer la solicitud a la API:", error.request);
      res.status(500).json({ error: "Error al obtener el conductor buscado" });
    } else {
      console.error(error);
      res.status(404).json({ error: error.message });
    }
  }
};

module.exports = get15Drivers;
