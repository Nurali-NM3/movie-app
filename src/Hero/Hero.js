import React, {useEffect, useState} from "react";
import {Swiper,SwiperSlide} from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Hero.css'
import axios from "axios";
import {Link} from "react-router-dom";


const Hero = ({lang}) => {
    const [movies,setMovies] = useState([])
    useEffect(() =>{
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=7f7ff843e3ed2f93a548e15db507c48f&language=${lang}-US&page=1`)
            .then(({data}) =>{
                setMovies(data.results)
            })
    },[lang])
    return (
        <div className={'swiper-wrapper wr-slide'}>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    movies.map((movie) =>{
                        return(

                                 <SwiperSlide key={movie.id}>
                                    <div className="wr-info" >
                                            <img
                                                loading={"lazy"}
                                                src={`https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/${movie.backdrop_path ||movie.poster_path}`}
                                                alt=""/>
                                       <div className="slide-content">
                                           <button className={'vote-btn'}>
                                               {Math.round(movie.vote_average)}.0
                                           </button>
                                           <h3>
                                               {<Link
                                                   to={`movie/${movie.id}`}>
                                                   {lang ==='ru' ? movie.title :  movie.original_title}
                                               </Link>}
                                           </h3>
                                           <p>{movie.release_date}</p>
                                       </div>
                                    </div>
                                 </SwiperSlide>


                        )
                    })
                }
            </Swiper>

        </div>
    );
};

export default Hero;