const videogameById = require('../controllers/findVideogamebyId')

const getVideogameById = async (req, res) => {
    const {id} = req.params;
    const isNumber = Number(id) === NaN ? 'DB' : 'API'
    try {
        const game = await  videogameById(id, isNumber)

        return res.status(200).json(game)

    } catch (error) {
        return res.status(500).json({"error": error.message})
    }
}

module.exports = getVideogameById;
