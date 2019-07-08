import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {

    state = {
        persons: [
            { name: 'Max', age: 28 },
            { name: 'John', age: 13 }
        ]
    }


    switchNameHandler = () => {
        console.log('Was clicked!');
    }

    render() {

        var div = 
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Running</Person>
            </div>

        return div
    }

}

export default App;
