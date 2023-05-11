import React, {useState} from 'react';
import './Header.css'
import {Link} from "react-router-dom";
import Search from "../InputSearch";
import img from '../assets/galsess.png'
function Header({handleLang, lang}) {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <header>
           <div className="container">
               <div className="header">
                   <div className={'sidebar'}>
                       <h3>
                           <Link className={'wr-logo'} to="/">
                               <span className={'red'}>T</span><span className={'blue'}>M</span>
                               <img className={'logo-header'} src={img} alt=""/>
                           </Link>
                       </h3>
                   </div>
                   <nav>
                       <Link to="/">HOME</Link>
                       <Link to="/popular">POPULAR</Link>
                       <Link to="/new">NEW</Link>
                       <Link to="/popular">LIST</Link>
                   </nav>
                   <div className={'wr-search'}>
                       <div className="search">
                           <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                           <Link to={`/searchMovie/${searchTerm}`}>
                               <button className={'btn search-btn'}>search</button>
                           </Link>
                       </div>
                       {/*<div className="wr-sign-up">*/}
                       {/*    <button className={'btn'}>sign up</button>*/}
                       {/*    <button className={'btn'}>log in</button>*/}
                       {/*</div>*/}
                       <select onChange={(e) => handleLang(e.target.value)} value={lang} name="language" id="">
                           <option value='en-US'>EN</option>
                           <option value='ru-RUS'>RU</option>
                       </select>
                   </div>
               </div>
           </div>
        </header>
    );
}

export default Header;