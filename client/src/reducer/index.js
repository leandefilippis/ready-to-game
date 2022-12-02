const initialState = {
    allVideogames: [],
    currentVideogames: [],
    videogameDetail: {},
    genres: [],
    platforms: [],
}

function rootReducer(state = initialState, action){
    switch(action.type){

        case 'GET_VIDEOGAMES':
            return{
                ...state,
                allVideogames: action.payload,
                currentVideogames: action.payload
            }

        case 'GET_VIDEOGAME_NAMES':
            return{
                ...state,
                currentVideogames: action.payload
            }

        case 'GET_VIDEOGAME_DETAIL':
            return{
                ...state,
                videogameDetail: action.payload
            }

        case 'POST_VIDEOGAME':
            return{
                ...state
            }
            
        case 'CLEAR_DETAIL':
            return{
                ...state,
                videogameDetail: []
            }

        case 'GET_GENRES':
            return{
                ...state,
                genres: action.payload
            }

        case 'GET_PLATFORMS':
            return{
                ...state,
                platforms: action.payload
            }
            
        case 'SORT_BY_NAME':
            const orderArr = action.payload === 'Forward' ?
            state.currentVideogames.sort(function (a, b) {
                if (a.name > b.name) {
                    return 1
                }
                if (b.name > a.name) {
                    return -1
                }
                return 0
            }) :
            state.currentVideogames.sort(function (a, b) {
                if (a.name > b.name) {
                    return -1
                }
                if (b.name > a.name) {
                    return 1
                }
                return 0
            })
            return{
                ...state,
                currentVideogames: orderArr
            }

        case 'SORT_BY_RATING':
            const ratedArr = action.payload === 'Forward' ?
            state.currentVideogames.sort(function (a, b) {
                if (a.rating < b.rating) {
                    return 1
                }
                if (b.rating < a.rating) {
                    return -1
                }
                return 0
            }) :
            state.currentVideogames.sort(function (a, b) {
                if (a.rating < b.rating) {
                    return -1
                }
                if (b.rating < a.rating) {
                    return 1
                }
                return 0
            })
            return{
                ...state,
                currentVideogames: ratedArr
            }

        case 'FILTER_BY_GENRE':
            const allVideogames = state.allVideogames
            const genreFilter = action.payload === 'All' ? allVideogames :
            allVideogames?.filter(e => e.genres.includes(action.payload))
            return{
                ...state,
                currentVideogames: genreFilter
            }

        case 'FILTER_BY_CREATION':
            const creationFilter = action.payload === 'Created' ?
            state.allVideogames.filter(e => e.createdInDb) :
            state.allVideogames.filter(e => !e.createdInDb)
            return{
                ...state,
                currentVideogames: creationFilter
            }

        default: return state;
    }
}

export default rootReducer