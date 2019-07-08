import React from 'react';

const person = (props) => {
    return (
        <div>
            <h1>I'm {props.name}! I am {props.age} years</h1>
            <h2>{props.children}</h2>
        </div>
    );
};

export default person;