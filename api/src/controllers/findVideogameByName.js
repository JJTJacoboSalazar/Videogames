const axios = require("axios");
const {Videogame,Genre} = require("../db.js");
const gamesData = require("./gamesData.js");
const { Op } = require("sequelize");

const {API_KEY} = process.env;

const findGameByName = async (name) =>{
    const cleanGameAPI = [];
    let gameByNameAPI = (await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`)).data.results;

    gameByNameAPI = await gamesData(gameByNameAPI);      //Limpio y filtro los datos que necesito.
    for (let i = 0; (i < 15 && i < gameByNameAPI.length); i++) {            //Filtro los primeros 15 juegos en un nuevo array.
        if(gameByNameAPI[i] !== null || gameByNameAPI[i] !== undefined){
            cleanGameAPI[i] = gameByNameAPI[i]
        }
    }     

    const gameByNameBD = await Videogame.findAll({        //Busco el name del juego en la DB
        where: { name: {[Op.iLike]: name} },
        include: {                              //Especifico que quiero incluir una tabla relacionada.
            model: Genre,                       //Modelo que quiero incluir, en este caso, Genre.
            attributes: ["name"],               //Incluyo el atributo "name" de Genre
            through: {
                attributes: []                  //No incluyo los atributos de la tabla intermedia en la propiedad "Genres"
            }
        }
    });      
     
    //Si no encuentra el juego, error.
    if(!cleanGameAPI.length && !gameByNameBD.length) throw new Error("This game doesn't exists")
    
    //Junto elementos de ambos arrays para luego enviarlo.
    const gameByName = [...cleanGameAPI, ...gameByNameBD];  
    return gameByName;
}

module.exports = findGameByName;