const {Videogame, Genre} = require("../db");
const {Op} = require('sequelize');
const {findGenres, saveGenresDB} = require('./findGenres')

const createVideogame = async ({id, name, description, genres, platforms, image, released, rating}) => {
    const findVideogame = await Videogame.findAll({  //Verificamos si el juego existe en BDD
        where: {
            name: {
                [Op.iLike]: `%${name}%`, //Condiciono que el name del nuevo juego sea igual a alguno de la DB o lo contenga. 
            }
        }
    })


if(findVideogame.length) throw new Error ('Ahem! There is already a game with that name!');

const newGame = await Videogame.create({id, name, description, genres, platforms, image, released, rating});


//*Find y save para buscar los generos y guardarlos

if(await Genre.count() === 0){ // Consultamos si hay registros en la base de datos
    const response = await findGenres(); //Si no hay, buscamos los genres en la API
    await saveGenresDB(response); //Guardamos
}


const foundedGenres = await Promise.all(genres.map(async (genre) => { //Espero a que todas las promesas se completen
    const searchedGenre = await Genre.findOne({ //Busco los generos que coincidan en la Base de datos
        where: {
            name: genre
        }
    })
    if(!searchedGenre) throw new Error (`The genre: ${genre} doesn't exist in the Database`);
    return searchedGenre
}))

    await newGame.addGenres(foundedGenres); //addGenres es un metodo creado por Sequelize para newGame
    return newGame;
}

module.exports = createVideogame;