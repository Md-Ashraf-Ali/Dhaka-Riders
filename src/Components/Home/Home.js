import React, { useEffect, useState } from 'react';
import Riders from '../Fake data/data.json';

const Home = () => {
    const [riders, setriders] = useState([]);
    useEffect(()=>{
        setriders(Riders);

    },[])
    return (
        <div>
            <h1>
                {
                    riders.map(rider => <li>{rider.name}</li>)
                }
            </h1>
        </div>
    );
};

export default Home;