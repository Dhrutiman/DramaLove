import React from 'react';
import "./Nav.css";

function Nav({ setSelectedOption }) {
    return (
        <div className="nav">
            <h2 onClick={() => setSelectedOption('Resent')} >Resent</h2>
            <h2 onClick={() => setSelectedOption('Favorite')}>Favorite</h2>
            <h2 onClick={() => setSelectedOption('Thriller')}>Thriller</h2>
            <h2 onClick={() => setSelectedOption('Crime')}>Crime</h2>
            <h2 onClick={() => setSelectedOption('Comedy')}>Comedy</h2>
            <h2 onClick={() => setSelectedOption('Horror')}>Horror</h2>
            <h2 onClick={() => setSelectedOption('Romance')}>Romance</h2>
            <h2 onClick={() => setSelectedOption('Mystery')}>Mystery</h2>
            <h2 onClick={() => setSelectedOption('All')}>All</h2>
        </div>
    )
}

export default Nav
