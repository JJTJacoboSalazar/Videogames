import {
    ADD_VIDEOGAMES,
    ORDER,
    FILTER,
    GENRES,
    PLATFORMS,
} from './action_types'

const initialState = {
    home_videogames : [],
    database_videogames : [],
    api_videogames : [],
    all_videogames : [],
    genres: [],
    platforms : []
};

const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        default:
            return {...state};
        case ADD_VIDEOGAMES:
            const videogames_all_list = [...payload.database,...payload.api];
            return {...state,
                api_videogames: payload.api,
                database_videogames: payload.database,
                home_videogames: videogames_all_list,
                all_videogames : videogames_all_list
            }

        case ORDER:
            const orderedVideogames = [...state.home_videogames]
            if (payload === 'AZ') {
                orderedVideogames.sort((a, b) => (a.name > b.name ? 1 : -1));
            } else if (payload === 'ZA') {
                orderedVideogames.sort((a, b) => (b.name > a.name ? 1 : -1));
            } else if (payload === '50') {
                orderedVideogames.sort((a, b) => b.rating - a.rating);
            } else if (payload === '05') {
                orderedVideogames.sort((a, b) => a.rating - b.rating);
            } 
            return {...state, home_videogames : orderedVideogames}
        case FILTER:
            if (payload === 'Default') {
                return {...state, home_videogames : state.all_videogames}
            }
            else if (payload === 'db') {
                return {...state, home_videogames : state.database_videogames}
            }
            else if (payload === 'api') {
                return {...state, home_videogames : state.api_videogames}
            }
            else{
                return {...state, 
                    home_videogames : state.home_videogames.filter((game) => game.genres.some(genre => genre.name === payload))
                }
            }
            case GENRES:
            return {...state, genres : payload}
        case PLATFORMS:
            return {...state, platforms : payload}
    }
};

export default rootReducer;