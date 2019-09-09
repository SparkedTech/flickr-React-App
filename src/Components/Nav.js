import React from 'react';
import {NavLink} from 'react-router-dom';


const Nav = () => {
    return (
        <nav className="main-nav">

            <ul>
                <li id="search-link"><NavLink to='/search'>Search</NavLink></li>
                <li><NavLink to='/suits'>Suits</NavLink></li>
                <li><NavLink to='/hats'>Hats</NavLink></li>
                <li><NavLink to='/boats'>Boats</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;