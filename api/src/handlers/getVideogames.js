const findAllVideogames = require('../controllers/findAllVideogames');
const findVideogameByName = require('../controllers/findVideogameByName');

const getVideogames = async (req,res) => {
    const {name} = req.query;
    try {
        const response = name? await findVideogameByName(name) : await findAllVideogames();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({"error": error.message})
    }
}

module.exports = getVideogames;