import React from 'react';
import "./Header.css";
import logo from "./images/BookApp_logo_white.svg";
import HomeIcon from "@material-ui/icons/Home";
//import LiveTvIcon from "@material-ui/icons/LiveTv";
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <img className="header__logo" src={logo} alt="Logo" />
            <div className="header__icons">
                <Link to='/'>
                    <div className="icon" >
                        <HomeIcon />
                        <p>Home</p>
                    </div>
                </Link>
                <div className="icon">
                    <SearchIcon />
                    <p>Search</p>
                </div>
            </div>

        </div>
    )
}

export default Header
