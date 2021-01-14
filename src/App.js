import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    number: "",
    heldNum: "",
    oper: "",
    buttonText: ["7", "8", "9", "C", "4", "5", "6", "/", "1", "2", "3", "*", "0", "-", "+", "="]
  }

  clickFunc = (buttonText) => {
    if (buttonText === "/" || buttonText === "*" || buttonText === "-" || buttonText === "+") {
      this.holdFunc(buttonText);
    } else if (buttonText === "C") {
      this.clearFunc();
    } else if (buttonText === "=") {
      this.mathFunc();
    } else {
      this.numFunc(buttonText);
    }
  }

  numFunc = (num) => {
    this.setState({ number: this.state.number + num})
  }

  holdFunc = (operator) => {
    this.setState({ heldNum: this.state.number, number: "", oper: operator })
  }

  mathFunc = () => {
    if (this.state.oper === "+") {
      this.setState({ number: parseInt(this.state.heldNum) + parseInt(this.state.number) })
    } else if (this.state.oper === "-") {
      this.setState({ number: parseInt(this.state.heldNum) - parseInt(this.state.number) })
    } else if (this.state.oper === "*") {
      this.setState({ number: parseInt(this.state.heldNum) * parseInt(this.state.number) })
    } else {
      this.setState({ number: parseInt(this.state.heldNum) / parseInt(this.state.number) })
    }
  }

  clearFunc = () => {
    this.setState({ number: "", heldNum: "", oper: "" })
  }
 
  render() {
    return (
      <div className="App">
        <h1 className="total">{this.state.number}</h1>
        <div className="buttons">
          {this.state.buttonText.map((textIndex) => {
            return(
              <CalcButton key={textIndex} func={() => {this.clickFunc(textIndex)}} text={textIndex}/>
            )
          })} 
        </div>
      </div>
    );
  }
}

const CalcButton = (props) => {
    return(
      <button className="indButt" onClick={props.func}>{props.text}</button>
    )
}

export default App;