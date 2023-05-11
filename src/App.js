import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Header from "./Component/Header/Header";
import Movie from "./Pages/movie";
import {useEffect, useState} from "react";
import Popular from "./Pages/Popular/Popular";
import SearchPage from "./Pages/SearchPage";
import Footer from "./Component/Footer";
import CharactersPage from "./Pages/CharactersPage";
import NewPage from "./Pages/NewPage";
import {useDispatch} from "react-redux";
import {getMovies} from "./redux/action/movieAction";

function App() {
    const  [lang,setLang] = useState('en-US')
    console.log(lang)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMovies(lang))
    }, [dispatch, lang])
  return (
      <BrowserRouter>
          <Header handleLang={setLang} lang={lang}/>
        <Routes>
          <Route path={'/'} element={<Homepage lang={lang}/>}/>
            <Route path={'/popular'} element={<Popular lang={lang}/>}/>
            <Route path={'/new'} element={<NewPage lang={lang}/>}/>
            <Route path={'/movie/:id'} element={<Movie lang={lang}/>}/>
            <Route path={'/searchMovie/:name'} element={<SearchPage lang={lang}/>}/>
            <Route path={'/CharactersPage/:id'} element={<CharactersPage/>}/>
        </Routes>
          <Footer/>
      </BrowserRouter>
  );
}

export default App;
