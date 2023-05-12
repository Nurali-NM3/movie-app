import React from 'react';
import {Link} from "react-router-dom";
import './List.css'

const List = ({movies}) => {
    return (
        <div className="container">
            <div className={'row'}>
                {
                    movies.map((movie) =>{
                        return(
                                    <div  key={movie.id} className={movie.poster_path && 'col-3'}>
                                        {movie.poster_path &&
                                        <div className="box">
                                                <Link
                                                    to={`/movie/${movie.id}`}>
                                                    <button
                                                        className={'vote-btn vote-btn-list'}>
                                                        {Math.round(movie.vote_average)}.0
                                                    </button>
                                                        <img
                                                            className={'img-list'}
                                                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path ||movie.backdrop_path}`}
                                                            alt=""/>
                                                </Link>
                                        </div>
                                        }
                                    </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default List;