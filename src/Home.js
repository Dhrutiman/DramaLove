import React, { useState } from 'react';
import Nav from './Nav';
import Result from './Result'

function Home({ match }) {
    //console.log(match)
    const [selectedOption, setSelectedOption] = useState('Resent');
    return (
        <div>

            <Nav setSelectedOption={setSelectedOption} />
            <Result key={selectedOption} selectedOption={selectedOption} />
        </div>
    );
}

export default Home
