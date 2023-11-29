const axios = require('axios');
const {Videogame, Genre} = require( '../db');
const dataGames = require('../auxFunctions/dataGames');
const {API_KEY} = process.env;

const findVideogameById = async (id, idType) => { 
    if(idType == 'DB'){
        const videogameDB = await Videogame.findByPk(id, { //Buscamos la PrimaryKey en la DB
            include: { //Especifico que quiero incluir una tabla relacionada
                model: Genre, //Modelo que quiero elegir
                attributes: ['name'], //Atributo name
                through: {
                    attributes: [], //Excluyo los atributos de tabla intermedia
                },
            },
        });
        return videogameDB;

    } else if(idType == 'API'){
        const videogameAPI = (await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)).data;
        const cleanVideogame = dataGames(videogameAPI); 
        return cleanVideogame;
    }
};

module.exports = findVideogameById;