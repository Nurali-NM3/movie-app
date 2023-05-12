import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import './index.css'
import { Pagination } from "swiper";
import {Link} from "react-router-dom";
const Characters = ({characters}) => {
    return (
        <div className={'wr-characters'}>
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
                <div className={'swiper-character'}>
                    {
                        characters.map(character =>
                            <>
                                {character.profile_path &&
                                    <SwiperSlide  key={character.id}>
                                        <Link to={`/CharactersPage/${character.id}`}>
                                            <img
                                                className={'img-character'}
                                                src={`https://www.themoviedb.org/t/p/w276_and_h350_face/${character.profile_path}`}
                                                alt=""/>
                                            <div className={'character-info'}>
                                                <h4>{character.name}</h4>
                                                <p>{character.character}</p>
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                }

                            </>
                        )
                    }
                </div>
            </Swiper>
        </div>
    );
};

export default Characters;