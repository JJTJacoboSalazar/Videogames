const findGenres = require('../controllers/findGenres');

const getGenres = async (req, res) => {

    try {

        const get_Genres = await findGenres();

        res.status(200).json(get_Genres);
        
    } catch (error) {

        res.status(500).json(error)
        
    };
};

module.exports = getGenres