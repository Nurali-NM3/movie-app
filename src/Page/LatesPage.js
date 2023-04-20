import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";

const LatestPage = () => {
    const navigation = useNavigate()
    const [movies,setMovies] = useState([])
    const [next,setNext] = useState(1)
    useEffect(() =>{
        axios.get(`https://api.themoviedb.org/3/movie/latest?api_key=7f7ff843e3ed2f93a548e15db507c48f&language=en-US&`)
            .then(({data}) =>{
                console.log(data)
                setMovies(data)
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
                {/*{*/}
                {/*    movies.map((movie) =>{*/}
                {/*        return(*/}
                {/*            <div className={'col-3'} key={movie.id}>*/}
                {/*                */}
                {/*            </div>*/}
                {/*        )*/}
                {/*    })*/}
                {/*}*/}
            </div>
        </div>

    );
};

export default LatestPage;