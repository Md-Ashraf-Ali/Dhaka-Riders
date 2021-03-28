import React, { useEffect, useState } from 'react';
import Riders from '../Fake data/data.json';
import Header from '../Header/Header';

const Home = () => {
    const [riders, setriders] = useState([]);
    const handleClick = () =>{
        
    }
    useEffect(()=>{
        setriders(Riders);

    },[])
    return (
        <div>
            {
                riders.map(rider => <Header rider = {rider} handleClick ={handleClick}></Header> )
            }
        </div>
    );
};

export default Home;