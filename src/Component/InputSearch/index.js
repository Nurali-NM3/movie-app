import React, {useEffect, useState} from 'react';
import axios from "axios";
import './index.css'
import {Link, useNavigate} from "react-router-dom";


function Search({searchTerm,setSearchTerm,lang}) {
    const [movies,setMovies] = useState([])
    const navigate = useNavigate()
    const handleClick = () =>{
        setMovies([])
        setSearchTerm('')
    }
    const handleEnter = (e) =>{
        setMovies([])
        setSearchTerm('')
        if (e.key ==='Enter'){
            navigate(`/searchMovie/${searchTerm}`)
        }
    }
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
             if (searchTerm){
                 axios.get(`https://api.themoviedb.org/3/search/movie?api_key=7f7ff843e3ed2f93a548e15db507c48f&query=${searchTerm}`)
                     .then(({data}) =>{
                         console.log(data)
                         setMovies(data.results)
                     })
                 console.log(searchTerm)
             }else {
                 return setMovies([])
             }
        }, 2000)

        return () => clearTimeout(delayDebounceFn)
    }, [searchTerm])

    return (
        <div className={'search-input'}>
            <input
                autoFocus
                type='text'
                autoComplete='off'
                className='live-search-field'
                placeholder='Search here...'
                onKeyPress={handleEnter}
                onChange={ ((e) => setSearchTerm(e.target.value))}
            />
            <div className={'dropDown'}>
                {
                    movies.map(movie =>
                    <div className={'dropDown-movie'}>

                        {movie.poster_path !==null ?
                            <img
                                className={'dropDown-img'}
                                src={`https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/${movie.poster_path}`}
                                alt=""
                            />
                            : <div className={'no-img1'}> no image</div>
                        }
                        <p> {
                            <Link
                                onClick={handleClick}
                                to={`/movie/${movie.id}`}>
                                {lang ==='ru'? movie.title
                                    : movie.original_title
                                }
                            </Link>
                        }</p>
                    </div>
                    )
                }
            </div>
        </div>
    )
}

export default Search