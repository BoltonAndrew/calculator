import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    persons: [
      {name: "Dan", age: "34"},
      {name: "Ben", age: "21"}
    ]
  }
  render() {
    return (
      <div className="App"> 
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
      </div>
    );
  }
}

const Person = (props) => {
  return(
    <div>
      <h1>Hi my name is {props.name} and I am {props.age} years old</h1>
    </div>
  )
}

export default App;
