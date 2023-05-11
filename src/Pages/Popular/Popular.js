import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import './popular.css'
import List from "../../Component/list/List";
import Button from "../../Component/button/Button";
import {useDispatch, useSelector} from "react-redux";
import {getPopularMovies} from "../../redux/action/movieAction";

const Popular = ({lang}) => {
    const navigation = useNavigate()
    const [next,setNext] = useState(1)
    const movies = useSelector(state => state.movies)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPopularMovies(next,lang))
    }, [dispatch,next,lang])
    const nextPage =()=>{
        setNext(next +1)
    }
    const prevPage =()=>{
        setNext(next -1)
    }
    return (
        <div>
                <div>
                    <div className="wr-btnNavigate">
                        <Button navigation={navigation} title={'back'}/>
                        <button className={'listNavigate'} disabled={next ===1 ?true: ''} onClick={prevPage}>prev</button>
                        <button className={'listNavigate'} disabled={next===500?true: ''} onClick={nextPage}>next</button>
                    </div>
                    <List movies={movies} next={next} lang={lang}/>
                </div>
        </div>
    );
};

export default Popular;