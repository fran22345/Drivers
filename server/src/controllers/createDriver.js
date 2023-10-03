const { Driver } = require("../db.js");

const createDriver = async (req, res) => {
  const {
    driverRef,
    number,
    code,
    name: { forename, surname },
    image: { url: imageUrl },
    dob: birthdate,
    nationality,
    url,
    teams,
    description,
  } = req.body;

  try {
    await Driver.create({
      driverRef,
      number,
      code,
      forename,
      surname,
      image: imageUrl,
      dob: new Date(birthdate),
      nationality,
      url,
      teams,
      description,
    });

    const createdDriver = await Driver.findOne({
      where: { forename: forename },
    });

    if (createdDriver) {
      res.status(200).json({response:`${createdDriver.forename} fue añadido exitosamente a la base de datos`});
    } else {
      res.status(404).json({ error: "Conductor no encontrado" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = createDriver;
