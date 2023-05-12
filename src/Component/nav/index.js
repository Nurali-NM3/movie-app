import React from 'react';
import {Link} from "react-router-dom";
import Search from "../InputSearch";

const Nav = ({setNav,searchTerm,setSearchTerm,handleLang,lang}) => {
    return (
        <div className={'nav2'}>
            <button className={'btn-off'} onClick={() => setNav(false)}>X</button>
            <select onChange={(e) => handleLang(e.target.value)} value={lang} name="language" id="">
                <option value='en-US'>EN</option>
                <option value='ru-RUS'>RU</option>
            </select>
            <div className={'wr-search2'}>
                <div className="search">
                    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                    <Link to={`/searchMovie/${searchTerm}`}>
                        <button className={'btn search-btn'}>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.11111 15.2222C12.0385 15.2222 15.2222 12.0385 15.2222 8.11111C15.2222 4.18375 12.0385 1 8.11111 1C4.18375 1 1 4.18375 1 8.11111C1 12.0385 4.18375 15.2222 8.11111 15.2222Z" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M17 17L13.1333 13.1334" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>
            <nav>
                <Link to="/">HOME</Link>
                <Link to="/popular">POPULAR</Link>
                <Link to="/new">NEW</Link>
                <Link to="/popular">LIST</Link>
            </nav>
        </div>
    );
};

export default Nav;