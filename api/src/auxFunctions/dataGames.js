const dataGames = ({id, name, released, background_image, platforms, rating, genres, description}) => {
    const gamesAPI = {
        id,
        name,
        released,
        background_image,
        platforms: platforms.map((plat) => plat.platform.name),
        rating,
        genres: genres.map((genre) => genre.name),
        description,
        database: false
    }
    return gamesAPI;
}

module.exports = dataGames;