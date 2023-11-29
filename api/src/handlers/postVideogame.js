const verifyData = require('../auxFunctions/verifyData');
const postVideogame = require('../controllers/postVideogame');

const postNewGame = async (req, res) => {
    const {id, name, description, genres, platforms, background_image, released, rating} = req.body;
    try {
        const verify = verifyData(id, name, description, genres, platforms, background_image, released, rating);

        const newGame = await postVideogame(verify);

        res.status(200).json(newGame);

    } catch (error) {
        res.status(400).json({"error": error.message})
    }
}


module.exports = postNewGame;