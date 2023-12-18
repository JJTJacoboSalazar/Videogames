const findAllVideoGames = require("../controllers/findAllVideoGames");
const getPlatforms = async (req,res) => {
    try {
        let gamePlatform = [];
        const allGames = await findAllVideoGames();
        aux = allGames.reduce((a, b) => a < b.platforms.length ? b.platforms.length : a, 0); //Una vez que se han procesado todos los juegos, el valor del acumulador contiene el número máximo de plataformas de todos los juegos.  El ternario utiliza el valor del acumulador para determinar si se ha encontrado el juego con el número máximo de plataformas. Si se ha encontrado el juego, el ternario devuelve el array de plataformas del juego. Si no se ha encontrado el juego, el ternario devuelve un array vacío. 

        gamePlatform = allGames.filter(g => g.platforms.length === aux).map(g => g.platforms); //Se utiliza el método  filter  para filtrar los juegos que tienen el número máximo de plataformas
        res.status(200).json(gamePlatform);
    } catch (error) {
        res.status(400).json({"error": error.message });
    }
}
module.exports = getPlatforms;

// reduce: Si el número de plataformas del juego es mayor que el valor del acumulador, el valor del acumulador se actualiza con el número de plataformas del juego. 
        // Si el número de plataformas del juego es menor que el valor del acumulador, el valor del acumulador no se actualiza. 