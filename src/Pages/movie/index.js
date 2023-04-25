import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import Button from "../../Component/button/Button";
import './index.css'
import List from "../../Component/list/List";
import Characters from "../../Component/Characters";


const Movie = ({lang}) => {
    const params = useParams()
    const navigation = useNavigate()
    const [movies,setMovie] = useState({})
    const [genres,setGenres] = useState([])
    const [country,setCountry] = useState([])
    const [companies,setCompanies] =useState([])
    const [similar,setSimilar] = useState([])
    const [video,setVideo] =useState([])
    const [loading,setLoading] = useState(true)
    const [characters,setCharacters] =useState([])
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=7f7ff843e3ed2f93a548e15db507c48f&language=${lang}-US`)
            .then(({data}) =>{
                setMovie(data)
                setGenres(data.genres)
                setCountry(data.production_countries)
                setCompanies(data.production_companies)
            }).finally(() =>{
                setLoading(false)
        })
    },[params,lang])
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${params.id}/similar?api_key=7f7ff843e3ed2f93a548e15db507c48f&language=en-US&page=1`)
            .then(({data}) =>{
                setSimilar(data.results)
            })
    },[params])
    useEffect(() =>{
        axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=7f7ff843e3ed2f93a548e15db507c48f&append_to_response=videos`)
            .then(({data}) =>{
                console.log(data.videos.results)
                setVideo(data.videos.results)
            })
    },[params])
    useEffect(() =>{
        axios.get(`https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=7f7ff843e3ed2f93a548e15db507c48f&language=${lang}-US`)
            .then(({data}) =>{
                console.log(data.cast)
                setCharacters(data.cast)
            })
    },[params,lang])
    return (
       <div>
           { loading ? <h2>hold on a second...</h2>:
               <div className={'wrapper-movie'}>
                   <Button
                       navigation={navigation}
                       title={'back'}
                   />
                   <div className="movie-info" >
                       <img
                           src={`https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/${movies.backdrop_path}`}
                           alt=""
                       />
                       <div className="movie-title">
                           <h1>
                               {lang ==='ru'? movies.title : movies.original_title}
                           </h1>
                           <div className="about-movie">
                               <button
                                   className={'vote-btn'}>
                                   {Math.round(movies.vote_average)}.0
                               </button>
                               <div>{country.map((country) =>(
                                   <div key={country.iso_3166_1} className={'genres'}>
                                       Country: <p>{country.name}</p>
                                   </div>
                               ))}</div>
                               <div className={'genres'} >
                                   Release date:<p>{movies.release_date}</p>
                               </div>
                               <div className={'genres'}>
                                   Genres:
                                   {
                                       genres.map((genre) => (
                                           <div key={genre.id} className={'genres'}>
                                               <p> {genre.name},</p>
                                           </div>
                                       ))
                                   }
                               </div>
                           </div>

                       </div>
                   </div>
                   <div className={'overview'}>
                       <h2>Company</h2>
                       <div className="companies">
                           {
                               companies.map((company) =>(
                                   <div key={company.id} className={'company'} >
                                       {company.logo_path !==null ?
                                           <img
                                               className={'logos'}
                                               src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`}
                                               alt=""/>
                                           : <div className={'no-logo'}> no logo</div>
                                       }
                                       <h2>{company.name}</h2>
                                   </div>
                               ))
                           }
                       </div>
                       <h2>overview</h2>
                       <p>{movies.overview}</p>
                   </div>
                   <Characters characters={characters}/>
                   <div className="similar">
                       <h2>Similar movie</h2>
                       <List
                           movies={similar}
                           lang={lang}
                       />
                   </div>

                   <div className="wrapper-video">

                       {
                           video.map((video) =>(
                               <div className={'video'}  key={video.id}>
                                   <iframe className='video'
                                           title='Youtube player'
                                           sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                                           src={`https://youtube.com/embed/${video.key}?autoplay=0`}>
                                   </iframe>
                               </div>
                           ))
                       }
                   </div>
               </div>
           }
       </div>
    );
};

export default Movie;