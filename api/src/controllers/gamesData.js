const cleanDataGame = (arrGameByAPI) => {
    const cleanDataArr = arrGameByAPI.map((game) => {
        return {
            id: game.id,
            name: game.name,
            platforms: game.platforms.map((elem) => elem.platform.name),
            image: game.background_image,
            released: game.released,
            genres: game.genres.map((elem)=> elem.name),
            rating: game.rating,
            createinDb: false
         }
     });
    return cleanDataArr;
}

// La función cleanDataGame devuelve un array con los datos limpios de los videojuegos. Este array se puede utilizar en la aplicación para mostrar los datos de los videojuegos a los usuarios.

module.exports = cleanDataGame;