const findVideogameById = require('../controllers/findVideogamebyId')

const getVideogameById = async (req, res) => {
  try {
    const { id } = req.params;
    const game = await findVideogameById(id);
    return res.status(200).json(game);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = getVideogameById