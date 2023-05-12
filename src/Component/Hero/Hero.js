import React, {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination, Navigation} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Hero.css'
import {Link} from "react-router-dom";
import { useSelector} from "react-redux";



const Hero = ({lang}) => {
    const movies = useSelector(state => state.movies)
    return (
      <div className="container">
          <div className={'swiper-wrapper wr-slide'}>
              <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                      delay: 4500,
                      disableOnInteraction: false,
                  }}
                  pagination={{
                      clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="heroSwiper"
              >
                  {
                      movies?.map(movie => <SwiperSlide key={movie.id}>
                              <div className="wr-info">
                                  <img
                                      loading={"lazy"}
                                      src={`https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/${movie.backdrop_path || movie.poster_path}`}
                                      alt=""/>
                                  <div className="slide-content">
                                      <button className={'vote-btn'}>
                                          {Math.round(movie.vote_average)}.0
                                      </button>
                                      <h3>
                                          {<Link
                                              to={`movie/${movie.id}`}>
                                              {lang === 'ru-RUS' ? movie.title : movie.original_title}
                                          </Link>}
                                      </h3>
                                      <p>{movie.release_date}</p>
                                  </div>
                              </div>
                          </SwiperSlide>
                      )
                  }
              </Swiper>

          </div>
      </div>
    );
};

export default Hero;