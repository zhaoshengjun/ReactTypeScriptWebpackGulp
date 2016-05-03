import * as React from 'react';
import {Component} from 'react';
import * as ReactDom from 'react-dom';

class App extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      red: 0,
      green: 0,
      blue:0
    }
    this.update = this.update.bind(this);
  }

  update() {     
    this.setState({
      red: ReactDom.findDOMNode(this.refs.red.refs.inp).value,
      green: ReactDom.findDOMNode(this.refs.green.refs.inp).value,
      blue: ReactDom.findDOMNode(this.refs.blue.refs.inp).value,
    })
  }  

  render() {
    return (
      <div>
        <Slider ref="red" update={this.update} /> {this.state.red}
        <Slider ref="green" update={this.update} /> {this.state.green}
        <Slider ref="blue" update={this.update} /> {this.state.blue}
      </div>
    );
  }
}

class Slider extends Component<any, any> {

  render() {
    return (
      <div>
        <input
          ref="inp"
          type="range"
          min="0"
          max="255"
          onChange={this.props.update}
          />
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));