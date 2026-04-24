const pool = require("../db/database");

async function listarSeries(req, res) {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const busqueda = req.query.q || "";
    const sort = req.query.sort || "id";
    const order = req.query.order === "desc" ? "DESC" : "ASC";

    const columnasPermitidas = ["id", "nombre", "genero", "temporadas", "creada_en"];
    const columnaOrden = columnasPermitidas.includes(sort) ? sort : "id";
    const offset = (page - 1) * limit;

    const datos = await pool.query(
      `
      SELECT id, nombre, descripcion, genero, temporadas, imagen, creada_en
      FROM series
      WHERE LOWER(nombre) LIKE LOWER($1)
      ORDER BY ${columnaOrden} ${order}
      LIMIT $2 OFFSET $3
      `,
      [`%${busqueda}%`, limit, offset]
    );

    const conteo = await pool.query(
      "SELECT COUNT(*) FROM series WHERE LOWER(nombre) LIKE LOWER($1)",
      [`%${busqueda}%`]
    );

    res.status(200).json({
      page,
      limit,
      total: Number(conteo.rows[0].count),
      data: datos.rows
    });
  } catch (error) {
    res.status(500).json({
      error: "Error al listar series",
      detalle: error.message
    });
  }
}

async function obtenerSeriePorId(req, res) {
  try {
    const resultado = await pool.query(
      "SELECT * FROM series WHERE id = $1",
      [req.params.id]
    );

    if (resultado.rows.length === 0) {
      return res.status(404).json({
        error: "Serie no encontrada",
        detalle: "No existe una serie con ese ID."
      });
    }

    res.status(200).json(resultado.rows[0]);
  } catch (error) {
    res.status(500).json({
      error: "Error al buscar la serie",
      detalle: error.message
    });
  }
}

async function crearSerie(req, res) {
  try {
    const { nombre, descripcion, genero, temporadas, imagen } = req.body;

    const resultado = await pool.query(
      `
      INSERT INTO series (nombre, descripcion, genero, temporadas, imagen)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
      `,
      [nombre, descripcion, genero, temporadas, imagen]
    );

    res.status(201).json({
      mensaje: "Serie creada correctamente",
      data: resultado.rows[0]
    });
  } catch (error) {
    res.status(500).json({
      error: "Error al crear la serie",
      detalle: error.message
    });
  }
}

async function editarSerie(req, res) {
  try {
    const { nombre, descripcion, genero, temporadas, imagen } = req.body;

    const resultado = await pool.query(
      `
      UPDATE series
      SET nombre = $1,
          descripcion = $2,
          genero = $3,
          temporadas = $4,
          imagen = $5
      WHERE id = $6
      RETURNING *
      `,
      [nombre, descripcion, genero, temporadas, imagen, req.params.id]
    );

    if (resultado.rows.length === 0) {
      return res.status(404).json({
        error: "Serie no encontrada",
        detalle: "No se puede editar porque el ID no existe."
      });
    }

    res.status(200).json({
      mensaje: "Serie actualizada correctamente",
      data: resultado.rows[0]
    });
  } catch (error) {
    res.status(500).json({
      error: "Error al editar la serie",
      detalle: error.message
    });
  }
}

async function eliminarSerie(req, res) {
  try {
    const resultado = await pool.query(
      "DELETE FROM series WHERE id = $1 RETURNING *",
      [req.params.id]
    );

    if (resultado.rows.length === 0) {
      return res.status(404).json({
        error: "Serie no encontrada",
        detalle: "No se puede eliminar porque el ID no existe."
      });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({
      error: "Error al eliminar la serie",
      detalle: error.message
    });
  }
}

module.exports = {
  listarSeries,
  obtenerSeriePorId,
  crearSerie,
  editarSerie,
  eliminarSerie
};
