# PROYECTO-FULL-STACK-BACKEND-21151

Backend del proyecto Full Stack desarrollado para la administración de series de televisión.  
Se implementó una **API REST con Node.js, Express y PostgreSQL**, conectada a una base de datos en la nube mediante **Neon** y desplegada públicamente en **Render**.

El sistema permite realizar operaciones CRUD completas y documenta todos los endpoints con Swagger.

---

#  API en producción

🔗 Backend publicado en Render:

https://proyecto-full-stack-backend-21151.onrender.com

🔗 Documentación Swagger:

https://proyecto-full-stack-backend-21151.onrender.com/api-docs

---

#  Tecnologías utilizadas

- Node.js
- Express.js
- PostgreSQL
- Neon Database
- Swagger UI
- OpenAPI 3.0
- dotenv
- CORS
- Render

---

#  Funcionalidades principales

##  Gestión de series

- Obtener todas las series
- Obtener una serie por ID
- Crear nueva serie
- Editar serie existente
- Eliminar serie

##  Documentación profesional

- Swagger UI integrado
- Pruebas desde navegador
- Especificación OpenAPI

## Producción

- Backend desplegado en Render
- Base de datos en Neon
- Acceso público mediante URL
## Como correr localmente 
- Clonar repositorio git clone https://github.com/Deniss3232/PROYECTO-FULL-STACK-BACKEND-21151.git
- Entrar a carpeta cd PROYECTO-FULL-STACK-BACKEND-21151
- instalar dependencias npm install
- Crear archivo .env PORT=3000
DATABASE_URL=tu_url_de_neon
- Ejecutar servidor npm run dev
- Abrir en el navegador http://localhost:3000
- Swagger local http://localhost:3000/api-docs
---
# Endpoints 
- GET /series
- GET /series/:id
- POST /series
- PUT /series/:id
- DELETE /series/:id

 # Cors 
 -Se configuró CORS para permitir que el frontend publicado en Netlify consuma la API publicada en Render.

 # Challenges implementados 
 - API REST completa
- CRUD completo
- Swagger funcionando
- OpenAPI YAML
-  Validaciones server-side
- Paginación
- Búsqueda
- Ordenamiento
- PostgreSQL en Neon
- Deploy en Render

# Reflexion 
Este backend permitió aplicar arquitectura REST con Express y PostgreSQL real en la nube. También fue útil documentar endpoints con Swagger y separar rutas, controladores y middleware.

# imagen 
<img width="1261" height="661" alt="image" src="https://github.com/user-attachments/assets/7518d36d-2aca-4d59-b716-f71eea3ce8e9" />

#  Estructura del proyecto

```txt
PROYECTO-FULL-STACK-BACKEND-21151/
│── docs/
│   └── openapi.yaml
│
│── src/
│   ├── controllers/
│   │   └── seriesController.js
│   │
│   ├── db/
│   │   ├── database.js
│   │   └── init.js
│   │
│   ├── middleware/
│   │   └── validarSerie.js
│   │
│   ├── routes/
│   │   └── seriesRoutes.js
│   │
│   └── server.js
│
│── package.json
│── package-lock.json
│── README.md
│── .gitignore
# 🔗 Enlaces importantes

## Sitio web
https://series-tracker-21151.netlify.app/

## Repositorio Frontend
https://github.com/Deniss3232/PROYECTO-FULL-STACK-21151

## Repositorio Backend
https://github.com/Deniss3232/PROYECTO-FULL-STACK-BACKEND-21151

## API Backend
https://proyecto-full-stack-backend-21151.onrender.com

## Swagger Docs
https://proyecto-full-stack-backend-21151.onrender.com/api-docs
