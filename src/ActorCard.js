import React from 'react';
import './ActorCard.css';

function ActorCard({ actor }) {
    return (
        <div className='actorCard'>
            <img src={actor.url} alt="" />
            {/*<p>{drama.overview}</p>*/}
            <h5>{actor.name}</h5>
            <p>as {actor.role}</p>
        </div>
    )
}

export default ActorCard
