import React from 'react';

const Destination = () => {

    const handleSubmit = () =>{
        
    }
    return (
        <div>
            <h1>Email and password validation</h1>
            <form onSubmit = {handleSubmit}>
                <input type="text" placeholder ="Write your Email Address" required/>
                <br/>
                <input type="password" name="" placeholder ="Write your Password" required/>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default Destination;