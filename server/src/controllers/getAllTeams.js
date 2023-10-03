const axios = require("axios");
const getUniqueTeams = require("./getUniqueTeam.js");
const { Team } = require("../db.js");

const getAllDrivers = async (req, res) => {
  try {
    const response = await axios.get("http://localhost:5000/drivers");
    const allTeams = response.data;
    const uniqueTeam = getUniqueTeams(allTeams);

    const equipoExistente = await Team.findOne({
      where: { name: uniqueTeam[0] },
    });

    if (equipoExistente) {
      res.status(200).json(uniqueTeam);
    } else {
      const equiposParaInsertar = uniqueTeam.map((nombre) => ({
        name: nombre,
      }));
      await Team.bulkCreate(equiposParaInsertar);

      res.status(200).json(uniqueTeam);
    }
  } catch (error) {
    console.error("Error al obtener los equipos:", error);
    res.status(500).json({ error: "Error al obtener los equipos" });
  }
};

module.exports = getAllDrivers;
