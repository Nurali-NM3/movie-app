import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import './page.css'
const Page = () => {
    const navigation = useNavigate()
    const [movies,setMovies] = useState([])
    const [next,setNext] = useState(1)
    useEffect(() =>{
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=7f7ff843e3ed2f93a548e15db507c48f&language=en-US&page=${next}`)
            .then(({data}) =>{
                console.log(data.results)
                setMovies(data.results)
            })
    },[next])
    const nextPage =()=>{
        setNext(next +1)
        console.log(next)
    }
    const prevPage =()=>{
        setNext(next -1)
        console.log(next)
    }
    return (
      <div>
          <button  onClick={() => navigation(-1)}>back</button>
          <button disabled={next ===1 ?true: ''} onClick={prevPage}>prev</button>
          <button disabled={next===500?true: ''} onClick={nextPage}>next</button>
          <div className={'row'}>
              {
                  movies.map((movie) =>{
                      return(
                          <div className={'col-3'} key={movie.id}>
                              <div className="box">
                                  <img
                                      className={'img-popular'}
                                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                      alt=""/>
                                  <div className={'info'}>
                                      <h3>{movie.original_title}</h3>
                                  </div>
                              </div>
                          </div>
                      )
                  })
              }
          </div>
      </div>
    );
};

export default Page;