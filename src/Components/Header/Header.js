import React from 'react';
import Destination from '../Destination/Destination';
import './Header.css'

const Header = (props) => {

    const {images,name} =props.rider;
    return (
        <div className= "rider-cart card" onClick = {() => props.handleClick(<Destination></Destination>)} >
            <img src={images} alt=""/>
            <h3>{name}</h3>
        </div>
    );
};

export default Header;