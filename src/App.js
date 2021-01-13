import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    number: "",
    heldNum: "",
    oper: "",
    sum: ""
  }

  numFunc = (num) => {
    this.setState({ number: this.state.number + num})
  }

  holdFunc = (operator) => {
    this.setState({ heldNum: this.state.number, number: "", oper: operator })
  }

  mathFunc = () => {
    if (this.state.oper === "+") {
      this.setState({ number: (parseInt(this.state.heldNum) + parseInt(this.state.number)) })
    } else if (this.state.oper === "-") {
      this.setState({ number: parseInt(this.state.heldNum) - parseInt(this.state.number) })
    } else if (this.state.oper === "*") {
      this.setState({ number: parseInt(this.state.heldNum) * parseInt(this.state.number) })
    } else {
      this.setState({ number: parseInt(this.state.heldNum) / parseInt(this.state.number) })
    }
  }

  clearFunc = () => {
    this.setState({ number: "", heldNum: "", oper: "", sum: "" })
  }
 
  render() {
    return (
      <div className="App">
        <h1 className="total">{this.state.number}</h1>
        <div className="buttons">
          <CalcButton func={() =>{this.numFunc("7")}} 
          text="7"
          />
          <CalcButton func={() =>{this.numFunc("8")}} 
          text="8"
          />
          <CalcButton func={() =>{this.numFunc("9")}} 
          text="9"
          />
          <CalcButton func={this.clearFunc} 
          text="C"
          />
          <CalcButton func={() =>{this.numFunc("4")}} 
          text="4"
          />
          <CalcButton func={() =>{this.numFunc("5")}} 
          text="5"
          />
          <CalcButton func={() =>{this.numFunc("6")}} 
          text="6"
          />
          <CalcButton func={() =>{this.holdFunc("/")}} 
          text="/"
          />
          <CalcButton func={() =>{this.numFunc("1")}} 
          text="1"
          />
          <CalcButton func={() =>{this.numFunc("2")}} 
          text="2"
          />
          <CalcButton func={() =>{this.numFunc("3")}} 
          text="3"
          />
          <CalcButton func={() =>{this.holdFunc("*")}} 
          text="*"
          />
          <CalcButton func={() =>{this.numFunc("0")}} 
          text="0"
          />
          <CalcButton func={() =>{this.holdFunc("-")}} 
          text="-"
          />
          <CalcButton func={() =>{this.holdFunc("+")}} 
          text="+"
          />
          <CalcButton func={this.mathFunc} 
          text="="
          />
        </div>
      </div>
    );
  }
}

const CalcButton = (props) => {
  return(
    <button className = "indButt" onClick={props.func}>{props.text}</button>
  )
}

export default App;