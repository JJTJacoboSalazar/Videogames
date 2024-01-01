const findPlatforms = require('../controllers/findPlatforms.js');

const getPlatforms = async (req, res) => {
    try {
        const platforms = await findPlatforms()
        return res.status(200).json(platforms)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = getPlatforms;