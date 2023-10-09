const { Driver, Team } = require("../db.js");

const upDateDriver = async (req, res) => {
  const { id } = req.params;
  const {
    forename,
    surname,
    image,
    dob,
    nationality,
    url,
    description,
    teams,
  } = req.body;

  try {
    const driverToUpdate = await Driver.findByPk(id);

    if (!driverToUpdate) {
      return res.status(404).json({ error: "Conductor no encontrado" });
    }

    // Actualiza los atributos del conductor directamente
    await driverToUpdate.update({
      forename,
      surname,
      image,
      dob,
      nationality,
      url,
      description,
    });

    if (teams && teams.length > 0) {

      const currentTeams = await driverToUpdate.getTeams();


      const teamsToAdd = teams.filter((newTeam) => {
        return !currentTeams.some(
          (currentTeam) => currentTeam.name === newTeam
        );
      });


      const teamsToRemoveNames = currentTeams
        .filter((currentTeam) => !teams.includes(currentTeam.name))
        .map((team) => team.name);

      // Realiza las operaciones necesarias para agregar, eliminar o mantener sin cambios los equipos asociados al conductor
      if (teamsToAdd.length > 0) {
        const teamsToAddInstances = await Team.findAll({
          where: {
            name: teamsToAdd,
          },
        });
        await driverToUpdate.addTeams(teamsToAddInstances);
      }

      if (teamsToRemoveNames.length > 0) {
        const teamsToRemoveInstances = await Team.findAll({
          where: {
            name: teamsToRemoveNames,
          },
        });
        await driverToUpdate.removeTeams(teamsToRemoveInstances);
      }
    }

    return res.status(200).json({ message: "Conductor actualizado exitosamente" });
  } catch (error) {
    return res.status(500).json({ error: "Error en el servidor" });
  }
};

module.exports = upDateDriver;
