import React, {useState} from 'react';
import './Header.css'
import {Link} from "react-router-dom";
import Search from "../Component/InputSearch";

function Header({handleLang,lang}) {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <header>
            <div className={'sidebar'}>
                <h3><Link to="/">logo</Link></h3>
                <button className={'btn'}>menu</button>
            </div>
            <nav>
                <Link to="/">HOME</Link>
                <Link to="/popular">POPULAR</Link>
                <Link to="/popular">NEW</Link>
                <Link to="/popular">LIST</Link>
            </nav>
            <div className="search">
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                <Link to={`/searchMovie/${searchTerm}`}><button className={'btn'}>search</button></Link>
            </div>
            <div className="wr-sign-up">
                <button className={'btn'}>sign up</button>
                <button className={'btn'}>log in</button>
            </div>
            <select onChange={(e) =>handleLang(e.target.value)} value={lang} name="language" id="">
                <option value="en">EN</option>
                <option value="ru">RU</option>
            </select>
        </header>
    );
}

export default Header;