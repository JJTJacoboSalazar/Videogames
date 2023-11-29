const axios = require('axios');
const {API_KEY} = process.env;
const {Genre} = require('../db');

const findGenres = async () =>{
    const response = (await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)).data.results;
    return response;
}

const saveGenresDB = async (data) => {
    let genres = data.map((genre) => genre.name); //Filtramos la informacion para que me llegue en data
    genres.forEach(async (genre) => {
        if(genre.length > 0){
            await Genre.findOrCreate({where: {name: genre}}) //Creamos los generos en el modelo
        }
    })
}

module.exports = {
    findGenres,
    saveGenresDB
}