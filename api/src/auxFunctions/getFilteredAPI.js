const axios = require("axios");
const {API_KEY} = process.env;
const gamesData = require("../controllers/gamesData");

const gamesPageFilter = async () => {
    let gamesFiltered = [];
    let URL = `https://api.rawg.io/api/games?key=${API_KEY}`;

    for (let i = 1; i < 6; i++) {
        let gamesAPI = (await axios.get(URL)).data;
        URL = (gamesAPI.next);
        let cleanData = await gamesData(gamesAPI.results);
        gamesFiltered.push(cleanData);
    }
    const videogames = gamesFiltered.flat();  //combina los datos de juegos en un unico array [[gamessP1],[gamesP2],[gamesP3]...] con flat() [gamesP1, gamesP2...]
    return videogames; 
}

// La función gamesPageFilter obtiene los datos de los videojuegos de la API de Rawg.io y los limpia utilizando la función cleanDataGame. Luego, la función gamesPageFilter devuelve un array con los datos limpios de los videojuegos. Este array se puede utilizar en la aplicación para mostrar los datos de los videojuegos a los usuarios.

module.exports = gamesPageFilter;