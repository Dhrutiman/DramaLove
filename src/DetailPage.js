import React, { useState, useEffect } from 'react';
import firebase from './firebase';
import './DetailPage.css'
import ActorCard from './ActorCard';
//import { useParams } from 'react-router-dom'

function DetailPage({ match }) {

    //console.log(match.params.id)

    const [drama, setDrama] = useState({
        genre: [],
        actor: [],
        aliasnames: [],
    })
    useEffect(() => {

        async function fetchData() {


            const data = await firebase.collection('Dhrutiman Sethi').doc(match.params.id);         //get all data
            data.get().then(function (doc) {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    setDrama(doc.data())
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch(function (error) {
                console.log("Error getting document:", error);
            });
            //console.log(data)
            //setDrama(data.docs.map(doc => doc.data()))
        }
        fetchData()
    }, [match.params.id])
    //console.log(drama.actor)
    return (
        <div className="detail">
            <img src={drama.poster} alt="" />

            <div className="info">
                <h1>{drama.name}</h1>
                <p className="id">{drama.imdbid}</p>
                <div className="info_aliasnames"><span>Also name as:</span>
                    {drama.aliasnames.map((aliasname) => <div><p>{aliasname} </p></div>)}
                </div>
                <div className="info_genre">
                    <div className="info_display-genre">
                        {drama.genre.map((genre) => (
                            <div key={genre}>
                                {genre}
                            </div>
                        ))}
                    </div>
                </div>
                <p>{drama.overview}</p>
                <h2>
                    Cast
                </h2>
                <div className='info_actor'>
                    {drama.actor.map((actor) => <ActorCard key={actor.name} actor={actor} />)}
                </div>

            </div>



        </div >
    )
}

export default DetailPage
