import React from 'react';
import { useState } from 'react';

function UseState() {
    const [color, setColour] = useState('Red');
    const changeColour = () => {
        setColour('Blue');
    };

    return (
        <>
            <h1 style={{ color: color }}>My Favourite colour is {color}</h1>
            <button onClick={changeColour}>Change Color</button>
        </>
    );
}

export default UseState;

