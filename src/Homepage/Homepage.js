import React, {useEffect, useState} from 'react';
import Hero from "../Hero/Hero";
import List from "../Component/list/List";
import axios from "axios";
function Homepage({lang}) {
    const [movies,setMovies] = useState([])
    useEffect(() =>{
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=7f7ff843e3ed2f93a548e15db507c48f&language=${lang}-US&page=2`)
            .then(({data}) =>{
                console.log(data.results)
                setMovies(data.results)
            })
    },[lang])
    return (
        <div>
            <Hero lang={lang}/>
            <List lang={lang} movies={movies}/>
        </div>
    );
}

export default Homepage;