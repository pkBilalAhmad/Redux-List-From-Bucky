import React, { Component } from 'react'
import ReactDOM from 'react-dom'
var root = document.getElementById('root')

class Txt extends Component {
  render() {
    return (
      <div>
        <h1>{
          this.props.text
        }</h1>
      </div>
    );
  }
}

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { text: " Bilal" }
  }
  change(e) {
    this.setState({
      text: e.target.value
    });
  }
  render() {
    return (
      <div>hello
        {alert("render")}
        <input type="text" value={this.state.text} onChange={this.change.bind(this)} />
        <Txt text={this.state.text} />
      </div>
    );
  }
}
ReactDOM.render(
  <App />,
  root
)