import * as React from 'react';
import {Component, PropTypes} from 'react';

import * as ReactDOM from 'react-dom';

let Mixin = InnerComponent => class extends Component<any, any> {
  constructor(props) {
    super(props);
    console.log("constructor");  
    this.state = {
      val: 0
    };
    this.update = this.update.bind(this);
  }

  update() {
    this.setState({
      val: this.state.val + 1
    });
  }

  componentWillMount() {
    console.log("component will mount");
  }  

  componentDidMount() {
    console.log("component did mount");
    
  }

  render() {
    return <InnerComponent 
      update={this.update}
      state={this.state}
      props={this.props}
      />
  }
}

const Button = (props) => {
  return <button onClick={props.update}> {props.props.txt} - {props.state.val}</button>;
}

const Label = (props) => {
  return <label onMouseMove={props.update}>{props.props.txt} - {props.state.val} </label>
}

let ButtonMixed = Mixin(Button)
let LabelMixed = Mixin(Label)

class App extends Component<any, any> { 
  render() {
    return (
      <div>
        <ButtonMixed
          txt="Button"
          />
        <LabelMixed
          txt="Label"
          />
      </div>
    );
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);