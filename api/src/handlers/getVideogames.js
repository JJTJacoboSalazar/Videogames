const findAllVideogames = require("../controllers/findAllVideogames");

const getGames = async (req, res) => {
  try {
    const games = await findAllVideogames();
    return res.status(200).json(games);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


module.exports = getGames