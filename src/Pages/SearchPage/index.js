import React, {useEffect, useState} from "react";
import axios from "axios";
import List from "../../Component/list/List";
import {useParams} from "react-router-dom";
const SearchPage =({lang})=>{
    const [movies,setMovies] =useState([])
    const params =useParams()
    console.log(params,'param')
    useEffect(() =>{
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=7f7ff843e3ed2f93a548e15db507c48f&query=${params.name}`)
            .then(({data}) =>{
                console.log(data)
                setMovies(data.results)
            })
    },[params])
    return(
        <div>
            <List movies={movies} lang={lang}/>
        </div>
    )
}
export default SearchPage
