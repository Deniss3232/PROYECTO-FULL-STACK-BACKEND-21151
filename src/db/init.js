const pool = require("./database");

async function iniciarBaseDeDatos() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS series (
      id SERIAL PRIMARY KEY,
      nombre VARCHAR(120) NOT NULL,
      descripcion TEXT NOT NULL,
      genero VARCHAR(80) NOT NULL,
      temporadas INTEGER NOT NULL,
      imagen TEXT NOT NULL,
      creada_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);

  const resultado = await pool.query("SELECT COUNT(*) FROM series");

  if (Number(resultado.rows[0].count) === 0) {
    await pool.query(`
      INSERT INTO series (nombre, descripcion, genero, temporadas, imagen)
      VALUES
      ('Breaking Bad', 'Un profesor de química entra al mundo criminal mientras intenta asegurar el futuro de su familia.', 'Drama', 5, 'https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_UF1000,1000_QL80_.jpg'),
      ('Dark', 'Una serie alemana de misterio donde varias familias quedan conectadas por viajes en el tiempo.', 'Ciencia ficción', 3, 'https://m.media-amazon.com/images/M/MV5BMmIyZjA3NGQtYjlhNS00ZDlkLTg1MDgtMDNmMzQwNzE0ODc1XkEyXkFqcGc@._V1_.jpg'),
      ('The Office', 'Una comedia de oficina con personajes cotidianos, momentos incómodos y mucho humor.', 'Comedia', 9, 'https://m.media-amazon.com/images/I/81NK3yCvMJL._AC_UF1000,1000_QL80_.jpg');
    `);
  }

  console.log("Base de datos lista.");
}

module.exports = iniciarBaseDeDatos;
