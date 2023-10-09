const { Driver, Team } = require("../db.js");

async function createDrivers(req, res) {
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
    const repetes = await Driver.findAll({ where: { forename: forename } });

    if (repetes.length > 0) {
      throw new Error(`${forename} ya existe`);
    }
    
    const createdDriver = await Driver.create({
      forename,
      surname,
      image,
      dob,
      nationality,
      url,
      description,
    });

    if (Array.isArray(teams) && teams.length > 0) {
      const teamRecords = await Team.findAll({ where: { name: teams } });

      if (teamRecords.length > 0) {
        await createdDriver.setTeams(teamRecords);
      }
    }

    res.status(200).json({
      response: `${createdDriver.forename} fue añadido exitosamente `,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = createDrivers;
