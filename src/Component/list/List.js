import React from 'react';
import {Link} from "react-router-dom";
import './List.css'
const List = ({movies,lang}) => {
    return (
        <div className={'row'}>
            {
                movies.map((movie) =>{
                    return(
                        <div className={'col-3'} key={movie.id}>
                            <div className="box">
                                {/*'https://api.themoviedb.org/3/movie/{movie_id}/rating?api_key=<<api_key>>'*/}
                                <button className={'vote-btn vote-btn-list'}>{Math.round(movie.vote_average)}.0</button>
                                {movie.poster_path !==null ?
                                    <img
                                        className={'img-popular'}
                                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                        alt=""/>
                                    : <div className={'no-img'}> no image</div>
                                }
                                <h3>
                                    {
                                        <Link
                                            to={`/movie/${movie.id}`}>
                                            {lang ==='ru'? movie.title
                                                : movie.original_title
                                                }
                                        </Link>}
                                </h3>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default List;