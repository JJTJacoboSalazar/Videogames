const {Videogame, Genre} = require("../db")
const getFilteredAPI = require('../auxFunctions/getFilteredAPI')

const findAllVideogames = async () => {
    const allGamesAPI = await getFilteredAPI(); //Obtenemos los videojuegos de la API y los limpiamos al mismo tiempo con el cleanDataGame dentro de la misma

const videogamesDB = await Videogame.findAll({ //Obtenemos los videojuegos de la DB
        include: { //Incluir una tabla relacionada
            model: Genre, 
            attributes: ["name"],
            through: {
                attributes: [] //No incluyo de la tabla intermedia
            }
        }
    });
    const allVideogames = [...allGamesAPI, ...videogamesDB ] //Concatenamos los videojuegos de la API y los de la base de datos devolviendolos en un unico array
    return allVideogames;
}

module.exports = findAllVideogames;