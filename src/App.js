import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Header from "./Component/Header/Header";
import Movie from "./Pages/movie";
import {useState} from "react";
import Popular from "./Pages/Popular/Popular";
import SearchPage from "./Pages/SearchPage";
import Footer from "./Component/Footer";
import CharactersPage from "./Pages/CharactersPage";

function App() {
    const  [lang,setLang] = useState('')
    console.log(lang)
  return (
    <div className="container">
      <BrowserRouter>
          <Header handleLang={setLang} lang={lang}/>
        <Routes>
          <Route path={'/'} element={<Homepage lang={lang}/>}/>
            <Route path={'/popular'} element={<Popular lang={lang}/>}/>
            <Route path={'/movie/:id'} element={<Movie lang={lang}/>}/>
            <Route path={'/searchMovie/:name'} element={<SearchPage lang={lang}/>}/>
            <Route path={'/CharactersPage/:id'} element={<CharactersPage/>}/>
        </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
