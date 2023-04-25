import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import Characters from "../../Component/Characters";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";

const CharactersPage = () => {
    const [loading,setLoading] =useState(true)
    const [characters,setCharacters] =useState({})
    const [movies,setMovies] = useState([])
    const params = useParams()
    useEffect(() =>{
        axios.get(`https://api.themoviedb.org/3/person/${params.id}?api_key=7f7ff843e3ed2f93a548e15db507c48f&language=en-US`)
            .then(({data}) =>{
                console.log(data , 'dof')
                setCharacters(data)
            }).finally(()=>{
                setLoading(false)
        })
    },[params])
    useEffect(() =>{
        axios.get(`https://api.themoviedb.org/3/person/${params.id}/movie_credits?api_key=7f7ff843e3ed2f93a548e15db507c48f&language=en-US`)
            .then(({data}) =>{
                setMovies(data.cast)
            })
    },[params])
    return (
        <div>
            { loading ?<h2>hold on a second...</h2>:
                <div>
                            {characters.profile_path !==null ?
                                <img
                                    className={'img-character'}
                                    src={`https://www.themoviedb.org/t/p/w276_and_h350_face/${characters.profile_path}`}
                                    alt=""/>
                                : <div className={'no-img'}> no image</div>
                            }
                            <div>
                               Name: <h2 className={'name'}>{characters.name}</h2>
                               Birthday: <h2>{characters.birthday}</h2>
                                gender: <h2>{characters.gender ===2 ? 'male':'female'}</h2>
                                Place of birth: <h2>{characters.place_of_birth}</h2>
                                Biography:<p>{characters.biography}</p>
                            </div>
                    <div>
                        <h2>Characters</h2>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 5,
                                    spaceBetween: 50,
                                },
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <div>
                                {
                                    movies.map(movie =>
                                        <SwiperSlide key={movie.id}>
                                            <Link to={`/movie/${movie.id}`}>
                                                {movie.poster_path !==null ?
                                                    <img
                                                        className={'img-character'}

                                                        src={`https://www.themoviedb.org/t/p/w276_and_h350_face/${movie.poster_path}`}
                                                        alt=""/>
                                                    : <div className={' no-img2'}> no image</div>
                                                }
                                                <div className={'character-info'}>
                                                    <h4>{movie.title}</h4>
                                                </div>
                                            </Link>
                                        </SwiperSlide>
                                    )
                                }
                            </div>
                        </Swiper>
                    </div>
                </div>
            }
        </div>
    );
};

export default CharactersPage;