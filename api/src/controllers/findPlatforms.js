const axios = require('axios');
const { Platform } = require('../db');
const { API_KEY } = process.env;

const findPlatforms = async () => {
  const URL = `https://api.rawg.io/api/games?key=${API_KEY}`;
  try {
    const findAllVideogames = await axios.get(URL);
    const responseData = findAllVideogames.data.results;
    const platforms = [];

    responseData.forEach((game) => {
      game.platforms.forEach(async (p) => {
        const platform = {
          id: p.platform.id,
          name: p.platform.name,
        };
        if (!platforms.some((pl) => pl.id === platform.id)) {
          platforms.push(platform);
      
          const existingPlatform = await Platform.findByPk(platform.id);
          if (!existingPlatform) {
            await Platform.create(platform);
          }
        }
      });
    });

    return platforms;
  } catch (error) {
    return error;
  }
}

module.exports = findPlatforms;