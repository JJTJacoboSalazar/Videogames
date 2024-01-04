const axios = require('axios')
const { Op } = require('sequelize');
const { Videogame , Genre } = require('../db')
const { API_KEY } = process.env

const findVideogameByName = async (gameName) => {

    const URL = `https://api.rawg.io/api/games?search=${gameName}&key=${API_KEY}`;

    try {
        
        const videogamesDB = await Videogame.findAll({
            where : {
                name: {
                    [Op.iLike]: `%${gameName}%`
                }
            },
            include : [
                {
                    model: Genre,
                    attributes: ['name'],
                    through: { attributes: [] }
                },
            ],
            attributes : ['id', 'name', 'image', 'rating'],
            limit : 20
        })

        const apiResponse = await axios.get(URL)

        const videogamesAPI = apiResponse.data.results.map((game) => ({
            id : game.id,
            name: game.name,
            image: game.background_image,
            rating: game.rating,
            genres: game.genres.map((p) => {
                return { name : p.name }
            })
        }));

        const db_api = [...videogamesDB,...videogamesAPI];
        const db_api_limited = db_api.slice(0, 20);

        if (db_api.length === 0) {
            return ({ error: 'No videogames with this name were found.' });
          } else {
            return db_api_limited
          }

    } catch (error) {
        return error;
    }

}

module.exports = findVideogameByName