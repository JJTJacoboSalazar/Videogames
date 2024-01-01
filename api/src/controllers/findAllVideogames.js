require('dotenv').config();
const { API_KEY } = process.env
const axios = require('axios')

const findAllVideogames = async () => {

    const URL = `https://api.rawg.io/api/games?page_size=100&key=${API_KEY}`;

    try {
        
        const findAllVideogames = await axios.get(URL)

        const response = findAllVideogames.data.results;

        const videogames = response.map((game) => ({
            id : game.id,
            name: game.name,
            rating: game.rating,
            image: game.background_image,
            genres: game.genres.map((p) => {
                return { name : p.name }
            }),
        }));

        return videogames

    } catch (error) {
        return error
    }
}

module.exports = findAllVideogames