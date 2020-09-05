import React, { useState, useEffect } from 'react';
import "./Result.css";
import VideoCard from './VideoCard';
import firebase from './firebase';

function Result({ selectedOption }) {
    //console.log(selectedOption)
    const [dramas, setDramas] = useState([])
    useEffect(() => {
        async function fetchData() {


            //const data = await db.collection('Dhrutiman Sethi').get();         //get all data
            //const data = await db.collection('Dhrutiman Sethi').where("favorite", "==", 'true').get();        //get only those which is favoruites
            //const data = await firebase.collection('Dhrutiman Sethi').where("genre", "array-contains", `${selectedOption}`).get(); // get data base on genre
            //const data = await db.collection('Dhrutiman Sethi').where("genre", 'array-contains-any', ['Crime', 'Thriller']).get(); // get data base any two genera
            //const data = await db.collection('Dhrutiman Sethi').where("genre", 'array-contains', 'Crime').where("favorite", "==", 'true').get(); // get data base two query 'AND'
            //const data = await firebase.collection('Dhrutiman Sethi').where("favorite", "==", '').get();

            if (selectedOption === 'Resent') {
                const data = await firebase.collection('Dhrutiman Sethi').where("favorite", "==", '').get();
                setDramas(data.docs.map(doc => doc.data()))
            }
            else if (selectedOption === 'Favorite') {
                const data = await firebase.collection('Dhrutiman Sethi').where("favorite", "==", 'true').get();
                setDramas(data.docs.map(doc => doc.data()))
            }
            else if (selectedOption === 'All') {
                const data = await firebase.collection('Dhrutiman Sethi').get();
                setDramas(data.docs.map(doc => doc.data()))
            }
            else {
                const data = await firebase.collection('Dhrutiman Sethi').where("genre", "array-contains", `${selectedOption}`).get(); // get data base on genre
                //console.log(data.docs.map(doc => doc.data()))
                setDramas(data.docs.map(doc => doc.data()))
            }


        }
        fetchData()
    }, [selectedOption])
    return (
        <div className="result">
            {dramas.map((drama) => (
                <VideoCard key={drama.imdbid} drama={drama} />
            ))}
        </div>
    );
}

export default Result
