const axios = require("axios");
const { Driver, Team } = require("../db.js");

const getAllDrivers = async (req, res) => {
  const { idDriver } = req.params;

  try {
    if (!isNaN(Number(idDriver))) {
      const response = await axios.get("http://localhost:5000/drivers");
      const driversData = response.data;
      const reslFilter = driversData.filter((driver) => driver.id == idDriver);

      res.status(202).json(reslFilter);
    } else {
      const findRes = await Driver.findOne({
        include: Team,
        where: { id: idDriver },
      });
      if (!findRes) throw new Error("No se encontro Ningun Corredor");
      res.status(200).json(findRes);
    }
  } catch (error) {
    if (error.response) {
      console.error("Respuesta de la API externa:", error.response.data);
      res.status(error.response.status).json({ error: error.response.data });
    } else if (error.request) {
      console.error("No se pudo hacer la solicitud a la API:", error.request);
      res.status(500).json({ error: "Error al obtener el conductor buscado" });
    } else {
      console.error("Error inesperado:", error);
      res.status(404).json({ error: error.message });
    }
  }
};

module.exports = getAllDrivers;
