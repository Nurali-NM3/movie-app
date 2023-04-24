import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Header from "./Header/Header";
import Movie from "./movie";
import {useState} from "react";
import Popular from "./Popular/Popular";
import SearchPage from "./SearchPage";
import Footer from "./Footer";

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
        </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
