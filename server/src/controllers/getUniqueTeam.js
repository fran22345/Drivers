const obtenerEquiposUnicos = (conductores) => {
  const equiposUnicos = [];

  conductores.forEach((conductor) => {
    if (conductor && conductor.teams && typeof conductor.teams === "string") {
      const equipos = conductor.teams.split(",");

      equipos.forEach((equipo) => {
        const equipoTrimmed = equipo.trim();
        if (equipoTrimmed && !equiposUnicos.includes(equipoTrimmed)) {
          equiposUnicos.push(equipoTrimmed);
        }
      });
    }
  });

  return equiposUnicos;
};

module.exports = obtenerEquiposUnicos;
