const { Router } = require("express");
const createDrivers = require("../controllers/createDriver");
const get15Drivers = require("../controllers/get15Drivers");
const getAllDrivers = require("../controllers/getAllDrivers");
const getAllTeams = require("../controllers/getAllTeams");
const getOneDriver = require("../controllers/getOneDriver");

const router = Router();

router.get("/drivers", (req, res) => {
  if (req.query.name) {
    get15Drivers(req, res); //obtiene los primeros 15 elementos segun la busqueda
  } else {
    getAllDrivers(req, res);
  }
});

router.get("/drivers/:idDriver", (req, res) => {
  getOneDriver(req, res);
});

router.post("/drivers", (req, res) => {
  createDrivers(req, res);
});

router.get("/team", (req, res) => {
  getAllTeams(req, res);
});
module.exports = router;
