import axios from "axios";
const GET_VIDEOGAMES = 'GET_VIDEOGAMES'
const GET_VIDEOGAME_NAMES = 'GET_VIDEOGAME_NAMES'
const GET_VIDEOGAME_DETAIL = 'GET_VIDEOGAME_DETAIL'
const GET_GENRES = 'GET_GENRES'
const GET_PLATFORMS = 'GET_PLATFORMS'
const CLEAR_DETAIL = 'CLEAR_DETAIL'
const SORT_BY_NAME = 'SORT_BY_NAME'
const SORT_BY_RATING = 'SORT_BY_RATING'
const FILTER_BY_GENRE = 'FILTER_BY_GENRE'
const FILTER_BY_CREATION = 'FILTER_BY_CREATION'

export function getVideogames(){
    return async function(dispatch){
        const data = await axios("https://ready-to-game.up.railway.app/videogames")
        return dispatch({
            type: GET_VIDEOGAMES,
            payload: data.data
        })
    }
}

export function getVideogameNames(name){
    return async function(dispatch){
        try {
            const data = await axios.get("https://ready-to-game.up.railway.app/videogames?name=" + name)
            if(!data) throw Error
            return dispatch({
                type: GET_VIDEOGAME_NAMES,
                payload: data.data
            })
        } catch (err) {
                return dispatch({
                    type: GET_VIDEOGAME_NAMES,
                    payload: "404"
            })
        }
    }
}

export function getVideogameDetail(id){
    return async function(dispatch){
        await axios.get(`https://ready-to-game.up.railway.app/videogames/${id}`)
        .then(response => {
            dispatch({
                type: GET_VIDEOGAME_DETAIL,
                payload: response.data
            })
        })
    }
}

export function clearDetail(){
    return{
        type: CLEAR_DETAIL
    }
}

export function postVideogame(payload){
    return async function(dispatch){
        try{
            const data = await axios.post("https://ready-to-game.up.railway.app/videogames", payload)
            return data
        } catch(err) {
            alert("Error 404")
        }

        // return dispatch({
        //     type: POST_VIDEOGAME,
        //     payload: data
        // })
    }
}

export function getGenres(){
    return async function(dispatch){
        const data = await axios("https://ready-to-game.up.railway.app/genres")
        return dispatch({
            type: GET_GENRES,
            payload: data.data
        })
    }
}

export function getPlatforms(){
    return async function(dispatch){
        const data = await axios("https://ready-to-game.up.railway.app/videogames")
        const aux = []
        let mapped = []

        data.data?.map(e => mapped.push(e.platforms))
        for( var i = 0 ; i < mapped.length ; i++ ){
            for( var x = 0 ; i < mapped.length ; i++ ){
                aux.push(mapped[i][x])
            }
        }
        
        mapped = [...new Set(aux)]

        return dispatch({
            type: GET_PLATFORMS,
            payload: mapped
        })
    }
}

export function sortByName(payload){
    return{
        type: SORT_BY_NAME,
        payload
    }
}

export function sortByRating(payload){
    return{
        type: SORT_BY_RATING,
        payload
    }
}

export function filterVideogamesByGenre(payload){
    return {
        type: FILTER_BY_GENRE,
        payload
    }
}

export function filterVideogamesByCreation(payload){
    return {
        type: FILTER_BY_CREATION,
        payload
    }
}
