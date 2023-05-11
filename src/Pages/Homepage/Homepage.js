import React from 'react';
import Hero from "../../Component/Hero/Hero";
import List from "../../Component/list/List";
import { useSelector} from "react-redux";

function Homepage({lang}) {
    const movies = useSelector(state => state.movies)
    return (
        <div>
                <div>
                    <Hero lang={lang}/>
                    <List lang={lang} movies={movies}/>
                </div>
        </div>
    );
}

export default Homepage;