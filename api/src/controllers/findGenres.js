const axios = require('axios');
const { Genre } = require('../db');
const { API_KEY } = process.env


const findGenres = async () => {

    const URL = `https://api.rawg.io/api/genres?key=${API_KEY}`;

    try {

        const genresDB = await Genre.findAll();

        if (genresDB.length === 0) {
            
            const genresAPI = await axios.get(URL);

            const newGenres = genresAPI.data.results.map((genre, index) => ({
                id: index,
                name: genre.name,
            }));

            await Genre.bulkCreate(newGenres);
            
            return newGenres

        } else {
            return genresDB
        };
        
    } catch (error) {
        return error
    };
};

module.exports = findGenres