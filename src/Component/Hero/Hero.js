import React, {useEffect, useState} from "react";
import {Swiper,SwiperSlide} from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Hero.css'
import axios from "axios";
import Video from "../Video/Video";


const Hero = () => {
    const [movies,setMovies] = useState([])
    useEffect(() =>{
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=7f7ff843e3ed2f93a548e15db507c48f&page=2')
            .then(({data}) =>{
                console.log(data.results)
                setMovies(data.results)
            })
    },[])
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
                                    <div className="wr-info">
                                            <img
                                                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                                                alt=""/>
                                            <h3>{movie.original_title}</h3>
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