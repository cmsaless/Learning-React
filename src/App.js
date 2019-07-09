import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js'

const app = (prop) => {

    const [personsState, setPersonsState] = useState({
        persons: [
            { name: 'Max', age: 28 },
            { name: 'John', age: 13 }
        ]
    });

    const switchNameHandler = (newName) => {
        // DON'T DO THIS: this.state.persons[0].name = "Chris"
        setPersonsState({
            persons: [
                { name: newName, age: 28 },
                { name: 'John', age: 13 }
            ]
        });
    };

    const nameChangedHandler = (event) => {
        setPersonsState({
            persons: [
                { name: event.target.value, age: 28 },
                { name: 'John', age: 13 },
                { name: "Jake", age: 3 }
            ]
        });
    }

    console.log(personsState);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <button onClick={() => switchNameHandler('Maximilian!!!')}>Switch Name</button>
            <Person 
                name={personsState.persons[0].name}
                age={personsState.persons[0].age} />
            <Person 
                name={personsState.persons[1].name} 
                age={personsState.persons[1].age} 
                click={switchNameHandler.bind(this, "Cat")}
                changed={nameChangedHandler} >My hobbies: Running</Person>
        </div>
    );
};

export default app;

