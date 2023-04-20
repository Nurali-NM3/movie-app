import React from 'react';
import './Header.css'
import {Link} from "react-router-dom";

function Header() {
    return (
        <header>
            <div className={'sidebar'}>
                <h3>logo</h3>
                <button>menu</button>
            </div>
            <nav>
                <a href="/">HOME</a>
                <a href="/page">POPULAR</a>
                <a href="/latest-page">NEW</a>
                <a href="/page">LIST</a>
            </nav>
            <div className="search">
                <input type="text"/>
                <button>search</button>
            </div>
            <div className="sign-up">
                <button>sign up</button>
                <button>log in</button>
            </div>
        </header>
    );
}

export default Header;