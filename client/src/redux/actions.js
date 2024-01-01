import {
    ADD_VIDEOGAMES,
    FILTER,
    GENRES,
    PLATFORMS,
    ORDER
} from './action_types';
import axios from 'axios';

export const get_videogames = () => {
    const endpoint = "http://localhost:3001/videogames"
    return async (dispatch) => {

        try {
            const response = await axios.get(endpoint)

            if (response.status === 200) {
                return dispatch({
                    type : ADD_VIDEOGAMES,
                    payload : response.data
                });
            }
        } catch (error) {
            window.alert(error.message)
        }
    }
}

export const get_videogamesByName = (name) => {
    const endpoint = `http://localhost:3001/videogame?name=${name}`
    return async (dispatch) => {

        try {
            const response = await axios.get(endpoint)

            if (response.status === 200) {
                return dispatch({
                    type : ADD_VIDEOGAMES,
                    payload : response.data
                });
            }
        } catch (error) {
            window.alert(error.message)
        }
    }
}

export const get_genres = () => {
    const endpoint = "http://localhost:3001/genres"
    return async (dispatch) => {

        try {
            const response = await axios.get(endpoint)

            if (response.status === 200) {
                return dispatch({
                    type : GENRES,
                    payload : response.data
                });
            }
        } catch (error) {
            window.alert(error.message)
        }
    }
}

export const get_platforms = () => {
    const endpoint = "http://localhost:3001/platforms"
    return async (dispatch) => {

        try {
            const response = await axios.get(endpoint)

            if (response.status === 200) {
                return dispatch({
                    type : PLATFORMS,
                    payload : response.data
                });
            }
        } catch (error) {
            window.alert(error.message)
        }
    }
}

export const orderVideogames = (order) => {
    return {
      type : ORDER, payload : order
    }
}

export const filterVideogames = (genre) => {
    return {
      type : FILTER, payload : genre
    }
}