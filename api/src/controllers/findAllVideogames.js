require('dotenv').config();
const { API_KEY } = process.env
const axios = require('axios')
const { Videogame , Genre } = require('../db')

const findAllVideogames = async () => {

    const URL_PAGE_1 = `https://api.rawg.io/api/games?key=${API_KEY}&page_size=20`;
    const URL_PAGE_2 = `https://api.rawg.io/api/games?key=${API_KEY}&page_size=40&page=2`;
    const URL_PAGE_3 = `https://api.rawg.io/api/games?key=${API_KEY}&page_size=40&page=3`;

    try {
        // the the games from the Database
        const videogamesDB = await Videogame.findAll({
            include : [
                {
                    model: Genre,
                    attributes: ['name'],
                    through: { attributes: [] }
                },
            ],
            attributes : ['id', 'name', 'image', 'rating']
        })

        // the the games from the API
        const firstPageItems = await axios.get(URL_PAGE_1)
        const secondPageItems = await axios.get(URL_PAGE_2)
        const thirdPageItems = await axios.get(URL_PAGE_3)
        videogamesApi = [].concat(firstPageItems.data.results, secondPageItems.data.results, thirdPageItems.data.results)

        videogamesApiParsed = videogamesApi.map((game) => ({
            id : game.id,
            name: game.name,
            rating: game.rating,
            image: game.background_image,
            genres: game.genres.map((p) => {
                return { name : p.name }
            }),
        }));

        return {"database": videogamesDB, "api": videogamesApiParsed}

    } catch (error) {
        return error
    }
}

module.exports = findAllVideogames