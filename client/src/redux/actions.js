// import {GET_GAMES, GET_GENRES, GENRE_FILTER, GET_PLATFORMS, PLATFORMS_FILTER,TYPE_FILTER, CURRENT_PAGE, RESET_PAGE, NAME_ORDER, RATING_ORDER, GET_GAME_ID, GET_GAME_BY_NAME, CLEAN_STATE_BY_NAME, SEARCH_GAME, USE_FILTER, CLEAN_ALL_FILTERS, CLEAN_DETAIL, RELEASED, THEME_CHANGE, THEME_LIGHT, THEME_DARK} from './action_types';

// import axios from 'axios';

// const URL = 'http://localhost:3001';


// //* TRAEMOS LOS JUEGOS
// const getGames = () => {
//     return async (dispatch) => {
//         const response = await axios.get(`${URL}/videogames`);

//         return dispatch({
//             type: GET_GAMES,
//             payload: response.data.results
//         })
//     }
// }
// //* ------------------------------------

// //* TRAEMOS LAS PLATFORMS
// const getPlatforms = () => {
//     return async (dispatch) => {
//         const response = await axios.get(`${URL}/platforms`);

//         return dispatch({
//             type: GET_PLATFORMS,
//             payload: response.data.results
//         })
//     }
// }
// //* ------------------------------------

// //* TRAEMOS LOS GENEROS
// const getGenres = () => {
//     return async (dispatch) => {
//         const response = await axios.get(`${URL}/genres`);

//         return dispatch({
//             type: GET_GENRES,
//             payload: response.data.results
//         })
//     }
// }
// //* ------------------------------------

// // Funcion para actualizar el numero de la pagina actual
// const changeCurrentPage = payload => {
//     return dispatch => {
//         dispatch({ type: CURRENT_PAGE, payload})
//     }
// };

// //* TRAEMOS POR NOMBRE
// const getGameByName = (name) => {
//     return async (dispatch) => {
//         const response = await axios.get(`${URL}/games?name=${name}`)

//         dispatch({
//             type: GET_GAME_BY_NAME,
//             payload: response.data.results
//         })
//         dispatch(changeCurrentPage(1)) 
//     }
// }
// //* ------------------------------------


// //* TRAEMOS POR ID
// const getGameID = (id) => {
//     return async (dispatch) => {
//         const response = await axios.get(`${URL}/videogames/${id}`)

//         return dispatch({
//             type: GET_GAME_ID,
//             payload: response.data.results
//         })
//     }
// }
// //* ------------------------------------


// const changeSearchGame = payload => {
//     return dispatch => {
//         dispatch({ type: SEARCH_GAME, payload})
//     }
// };

// /*----------------------------------------------*/

// const changeUseFilter = payload => {
//     return dispatch => {
//         dispatch({ type: USE_FILTER, payload })
//     }
// };
// /*----------------------------------------------*/

// const changeGenresFilter = payload => {
//     return dispatch => {
//         dispatch({ type: GENRE_FILTER, payload})
//     }
// };
// /*----------------------------------------------*/

// const changePlatformsFilter = payload => {
//     return dispatch => {
//         dispatch({ type: PLATFORMS_FILTER, payload})
//     }
// };
// /*----------------------------------------------*/

// const changeTypeFilter = payload => {
//     return dispatch => {
//         dispatch({ type: TYPE_FILTER, payload})
//     }
// };
// /*----------------------------------------------*/

// const changeNameOrder = payload => {
//     return dispatch => {
//         dispatch({ type: NAME_ORDER, payload })
//     }
// };
// /*----------------------------------------------*/

// const changeRatingOrder = payload => {
//     return dispatch => {
//         dispatch({ type: RATING_ORDER, payload })
//     }
// };
// /*----------------------------------------------*/


// const cleanAllFilters = () => {
//     return dispatch => {
//         dispatch({ type: CLEAN_ALL_FILTERS })
//     }
// };
// /*----------------------------------------------*/

// const cleanStateByName = payload => {
//     return dispatch => {
//         dispatch({ type: CLEAN_STATE_BY_NAME, payload })
//     }
// };
// /*----------------------------------------------*/

// const resetPage = payload => {
//     return dispatch => {
//         dispatch({ type: RESET_PAGE, payload})
//     }
// }
// /*----------------------------------------------*/

// const cleanGameDetail = payload => {
//     return dispatch => {
//         dispatch({ type: CLEAN_DETAIL, payload})
//     }
// };
// /*----------------------------------------------*/

// const getReleased = payload => {
//     return dispatch => {
//         dispatch({ type: RELEASED, payload })
//     }
// }
// /*----------------------------------------------*/

// const themeChange = (theme) => {
//     if (theme === 'light') {
//         return {
//             type: THEME_LIGHT
//         };
//     } else if (theme === 'dark') {
//         return {
//             type: THEME_DARK
//         };
//     }
// };

//  const themeLight = () => {
//     return {
//         type: THEME_LIGHT,
//         theme: 'light'
//     }
// };

//  const themeDark = () => {
//     return {
//         type: THEME_DARK,
//         theme: 'dark'
//     } 
// };



// export {getGames, getGenres, themeChange, themeLight, themeDark, getGameByName, getGameID, changeCurrentPage, changeSearchGame, changeUseFilter, changeGenresFilter, changePlatformsFilter, changeTypeFilter, changeNameOrder, changeRatingOrder, cleanAllFilters, cleanStateByName, resetPage, cleanGameDetail, getReleased, getPlatforms}


import axios from "axios";

//ACTION TYPES
export const GET_ALLGAMES = "GET_ALLGAMES";
export const GET_GAME_DETAIL = "GET_GAME_DETAIL";
export const GET_GENRES = "GET_GENRES";
export const GET_ALL_PLATFORMS = "GET_ALL_PLATFORMS";
export const GET_GAME_BY_NAME = "GET_GAME_BY_NAME";

export const ORDER_GAMES = "ORDER_GAMES";
export const FILTER_GAMES_DB_API = "FILTER_GAMES_DB_API";
export const FILTER_GENDER_GAMES = "FILTER_GENDER_GAMES";
export const DELETE_GENRE = "DELETE_GENRE"


export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const CLEAN_INFO_FILTERS = "CLEAN_INFO_FILTERS";

//ACTION CREATORS
export const getAllGames = () => {
    return async function (dispatch) {
        const response = (await axios.get(`http://localhost:3001/videogames`)).data;
        return dispatch({ type: GET_ALLGAMES, payload: response });
      };
} 

export const getGenres = () => {
    return async function (dispatch) {
        const response = (await axios.get(`http://localhost:3001/genres`)).data
        return dispatch({type: GET_GENRES, payload: response})
    }
}

export const getGameDetail = (id) =>{
    return async function (dispatch) {
        const response = (await axios.get(`http://localhost:3001/videogames/${id}`)).data;
        dispatch({ type: GET_GAME_DETAIL, payload: response });
    };
}

export const getAllPlatforms = () => {
    return async function (dispatch) {
        const response = (await axios.get(`http://localhost:3001/platforms`)).data;
        return dispatch({ type: GET_ALL_PLATFORMS, payload: response });
      };
} 

export const getGameByName = (name) => {
    return async function(dispatch){
        try {
            const response = (await axios.get(`http://localhost:3001/videogames?name=${name}`)).data;
            return dispatch({type: GET_GAME_BY_NAME, payload: response});
        } catch (error) {
            console.log(error);
            alert(error.response.data.error);
        }
    }
}

export const createGames = (videogame) =>{
    return function() {
        axios.post("http://localhost:3001/videogames", videogame)     
        .catch((error)=> alert("The game could not be created: it doesn't meet the validation requirements."))
    }
 }

export const filterGenres = (gender) => { return { type: FILTER_GENDER_GAMES, payload: gender } }
export const deleteGenre = (genre) => { return { type: DELETE_GENRE, payload: genre} }

export const filterGamesDBorAPI = (datatype) =>{ return { type: FILTER_GAMES_DB_API , payload: datatype}}

export const orderGames = (order) => { return { type: ORDER_GAMES, payload: order } }

export const cleanGameDetail = () => { return { type: CLEAN_DETAIL } };

export const cleanInfoFilters = () => { return {type: CLEAN_INFO_FILTERS }}