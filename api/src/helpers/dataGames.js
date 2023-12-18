const dataGames = ({id, name, released, background_image, platforms, rating, genres, description}) => {
    const gamesAPI = {
        id,
        name,
        released,
        image: background_image,
        platforms: platforms.map((plat) => plat.platform.name),
        rating,
        genres: genres.map((genre) => genre.name),
        description,
        createinDb: false
    }
    return gamesAPI;
}

module.exports = dataGames;