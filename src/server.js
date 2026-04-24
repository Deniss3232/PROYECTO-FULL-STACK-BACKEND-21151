const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
require("dotenv").config();

const iniciarBaseDeDatos = require("./db/init");
const seriesRoutes = require("./routes/seriesRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

const openApiDocument = YAML.load("./docs/openapi.yaml");

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    mensaje: "API REST de Series Tracker funcionando",
    documentacion: "/api-docs",
    endpoints: ["/series", "/series/:id"]
  });
});

app.use("/series", seriesRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openApiDocument));

iniciarBaseDeDatos()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
      console.log(`Swagger disponible en http://localhost:${PORT}/api-docs`);
    });
  })
  .catch((error) => {
    console.error("No se pudo iniciar la base de datos:", error.message);
  });
