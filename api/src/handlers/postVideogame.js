const postVideogame = require('../controllers/postVideogame')

const postGame = async (req, res) => {
    
    const { 
        name,
        description,
        image,
        platforms,
        released,
        rating,
        genres
    } = req.body;

    if(!name || !description || !image || !platforms || !released || !rating || !genres) {
        res.status(400).json({ error : "Faltan datos"})
        return
    }

    try {

        const newVideogame = await postVideogame(name, description, image, platforms, released, rating, genres)

        res.status(200).json(newVideogame)

    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = postGame