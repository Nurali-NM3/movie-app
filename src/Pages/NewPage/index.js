import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import List from "../../Component/list/List";
import Button from "../../Component/button/Button";
import {useDispatch, useSelector} from "react-redux";
import {getNowPlayingMovies, getPopularMovies} from "../../redux/action/movieAction";
const NewPage = ({lang}) => {
    const navigation = useNavigate()
    const [next,setNext] = useState(1)
    const dispatch = useDispatch()
    const movies = useSelector(state => state.movies)
    useEffect(() => {
        dispatch(getNowPlayingMovies(next,lang))
    }, [dispatch,next,lang])

    const nextPage =()=>{
        setNext(next +1)
    }
    const prevPage =()=>{
        setNext(next -1)
    }
    return (
                <div className={'container'}>
                    <List movies={movies} lang={lang}/>
                    <div className="wr-btnNavigate">
                        <button className={'listNavigate' } disabled={next ===1 ?true: ''} onClick={prevPage}>prev</button>
                        <button className={'listNavigate'} disabled={next===500?true: ''} onClick={nextPage}>next</button>
                    </div>
                    <Button navigation={navigation} title={'back'}/>
                </div>
    );
};

export default NewPage;