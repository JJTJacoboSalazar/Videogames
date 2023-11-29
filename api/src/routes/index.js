const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

const getVideogames = require('../handlers/getVideogames')
const getVideogameById = require('../handlers/getVideogameById');
const getGenres = require('../handlers/getGenres');
const postVideogame = require('../handlers/postVideogame');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/videogames", getVideogames);
router.get("/videogames/:id", getVideogameById);
router.get("/genres", getGenres);
router.post("/videogames", postVideogame);



module.exports = router;
