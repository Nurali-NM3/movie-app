import axios from "axios";


export const getMovies = (lang) =>{
    return (dispatch) => {
        axios(`https://api.themoviedb.org/3/discover/movie?api_key=7f7ff843e3ed2f93a548e15db507c48f&language=${lang}&page=1`)
            .then(({data}) =>{
                dispatch({type: 'GET_MOVIES',payload: data.results})
            })
    }
}
export const getPopularMovies = (next,lang) =>{
    return (dispatch) => {
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=7f7ff843e3ed2f93a548e15db507c48f&language=${lang}&page=${next}`)
            .then(({data}) =>{
                dispatch({type: 'GET_POPULAR_MOVIES',payload: data.results})
            })
    }
}
export const getNowPlayingMovies = (next,lang) =>{
    return (dispatch) => {
        axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=7f7ff843e3ed2f93a548e15db507c48f&language=${lang}&page=${next}`)
            .then(({data}) =>{
                dispatch({type: 'GET_NOW_PLAYING_MOVIES',payload: data.results})
            })
    }
}