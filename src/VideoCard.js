import React from 'react';
import './VideoCard.css';
//import TextTruncate from "react-text-truncate";
import { Link } from 'react-router-dom';

function VideoCard({ drama }) {
    //console.log(drama)
    return (
        <Link to={`detail/${drama.imdbid}`} className='drama_link'>
            <div className="videoCard">
                <img src={drama.poster} alt="" />
                {/*<p>{drama.overview}</p>*/}
                <h2>{drama.name}</h2>
                <div className="genre">
                    <ul className="display-genre">
                        {drama.genre.map((genre) => (
                            <li key={genre}>{genre}</li>
                        ))}
                    </ul>
                </div>
                {/*<TextTruncate
                line={1}
                element="p"
                truncateText="..."
                textTruncateChild={
                    <Link to={`detail/${drama.imdbid}`}>
                        Read more
                    </Link>
                }
                text={drama.overview}
            />*/}
            </div >
        </Link>
    )
}

export default VideoCard
