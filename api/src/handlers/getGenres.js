const {Genre} = require('../db');
const {findGenres, saveGenresDB} = require('../controllers/findGenres');
const dataGenres = require('../auxFunctions/dataGenres');


const getGenres = async (req,res) => {
    const genresDB = await Genre.findAll();
    try {
        const response = await findGenres();

        if(genresDB.length === 0) await saveGenresDB(response);

        const genres = dataGenres(response);
        return res.status(200).json(genres);

    } catch (error) {
        return res.status(500).json({"error": error.message})
    }
}

module.exports = getGenres;