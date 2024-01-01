const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

const getAllVideogames = require('../handlers/getVideogames.js')
const getVideogameByName = require('../handlers/getVideogameByName.js')
const getVideogameById = require('../handlers/getVideogameById.js')
const getGenres = require('../handlers/getGenres.js')
const getPlatforms = require('../handlers/getPlatforms.js')
const getCreatedGames = require('../handlers/getCreatedGames.js')
const postVideogame = require('../handlers/postVideogame.js')


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/videogames', getAllVideogames);
router.get('/videogame/:id', getVideogameById);
router.get('/genres', getGenres);
router.get('/platforms', getPlatforms);
router.get('/videogame', getVideogameByName);
router.post('/create', postVideogame);
router.get('/videogames', getCreatedGames);


module.exports = router;
