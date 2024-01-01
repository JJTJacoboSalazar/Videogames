//const axios = require("axios");
const { Videogame, Genres } = require("../db.js")
//const axios = require('axios')
//const {Sequelize, where} = require('sequelize');
//const { YOUR_API_KEY } = process.env;


const getByCreados = async () => {
  try {
    const resultCreados = await Videogame.findAll({
      include: [
         { model: Genres}
       ]
  })

  return resultCreados;     // esta funcion la creamos para mostrar por pagina los juegos que haya creado el usuario
  } catch (error) {
    return error;
    
  }

};

module.exports = {
  getByCreados,
  
};