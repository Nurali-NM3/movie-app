

const initialState = {
    movies:[],
}

export function movieReducer(state = initialState,action) {
    switch (action.type) {
        case 'GET_MOVIES' :
            return {...state, movies: action.payload}
        case 'GET_POPULAR_MOVIES' :
            return {...state, movies: action.payload}
        case 'GET_NOW_PLAYING_MOVIES' :
            return {...state, movies: action.payload}
        default:
            return state
    }
}