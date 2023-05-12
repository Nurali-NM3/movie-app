import React, {useState} from 'react';
import './Header.css'
import {Link} from "react-router-dom";
import Search from "../InputSearch";
import img from '../assets/galsess.png'
import Nav from "../nav";
function Header({handleLang, lang}) {
    const [searchTerm, setSearchTerm] = useState('')
    const [nav,setNav] =useState(false)
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
                   <nav className={'nav'}>
                       <Link to="/">HOME</Link>
                       <Link to="/popular">POPULAR</Link>
                       <Link to="/new">NEW</Link>
                       <Link to="/popular">LIST</Link>
                   </nav>
                   <div className={'wr-search'}>
                       <div className="search">
                           <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                           <Link to={`/searchMovie/${searchTerm}`}>
                               <button className={' search-btn'}>
                                   <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M8.11111 15.2222C12.0385 15.2222 15.2222 12.0385 15.2222 8.11111C15.2222 4.18375 12.0385 1 8.11111 1C4.18375 1 1 4.18375 1 8.11111C1 12.0385 4.18375 15.2222 8.11111 15.2222Z" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                       <path d="M17 17L13.1333 13.1334" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                   </svg>
                               </button>
                           </Link>
                       </div>
                       <select onChange={(e) => handleLang(e.target.value)} value={lang} name="language" id="">
                           <option value='en-US'>EN</option>
                           <option value='ru-RUS'>RU</option>
                       </select>
                   </div>
                   <button onClick={() => setNav(true)} className={'nav-btn'}>
                       <svg  width="40" height="21" viewBox="0 0 40 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <line y1="0.5" x2="40" y2="0.5" stroke="#fff"/>
                           <line y1="10.5" x2="40" y2="10.5" stroke="#fff"/>
                           <line y1="20.5" x2="40" y2="20.5" stroke="#fff"/>
                       </svg>
                   </button>
                   {
                       nav &&
                       <div className={'nav-link'}>
                           <Nav setNav={setNav}  handleLang={handleLang} lang={lang} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                       </div>
                   }
               </div>
           </div>
        </header>
    );
}

export default Header;