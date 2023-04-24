import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import './popular.css'
import List from "../Component/list/List";
import Button from "../Component/button/Button";
const Popular = ({lang}) => {
    const navigation = useNavigate()
    const [movies,setMovies] = useState([])
    const [next,setNext] = useState(1)
    useEffect(() =>{
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=7f7ff843e3ed2f93a548e15db507c48f&language=${lang}-US&page=${next}`)
            .then(({data}) =>{
                setMovies(data.results)
            })
    },[lang, next])
    const nextPage =()=>{
        setNext(next +1)
    }
    const prevPage =()=>{
        setNext(next -1)
    }
    return (
      <div>
          <Button navigation={navigation} title={'back'}/>
          <button disabled={next ===1 ?true: ''} onClick={prevPage}>prev</button>
          <button disabled={next===500?true: ''} onClick={nextPage}>next</button>
        <List movies={movies} lang={lang}/>
      </div>
    );
};

export default Popular;