const {getByCreados} = require('../controllers/gamesCreated.js');

const getCreatedGames = async (req, res) => {
    try {
        const games = await getByCreados()
        return res.status(200).json(games)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = getCreatedGames;