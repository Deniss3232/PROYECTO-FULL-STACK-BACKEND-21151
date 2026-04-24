function validarSerie(req, res, next) {
  const { nombre, descripcion, genero, temporadas, imagen } = req.body;

  if (!nombre || !descripcion || !genero || temporadas === undefined || !imagen) {
    return res.status(400).json({
      error: "Datos incompletos",
      detalle: "Debe enviar nombre, descripcion, genero, temporadas e imagen."
    });
  }

  if (String(nombre).trim().length < 2) {
    return res.status(400).json({
      error: "Nombre inválido",
      detalle: "El nombre debe tener al menos 2 caracteres."
    });
  }

  if (!Number.isInteger(Number(temporadas)) || Number(temporadas) <= 0) {
    return res.status(400).json({
      error: "Temporadas inválidas",
      detalle: "Las temporadas deben ser un número entero mayor a cero."
    });
  }

  next();
}

module.exports = validarSerie;