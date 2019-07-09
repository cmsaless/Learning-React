import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I'm {props.name}! I am {props.age} years</p>
            <p>{props.children}</p>
            <input onChange={props.changed} type="text"/>
        </div>
    );
};

export default person;