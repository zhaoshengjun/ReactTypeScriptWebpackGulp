import * as React from 'react';
import {Component, PropTypes} from 'react';

import * as ReactDOM from 'react-dom';

class App extends Component<any, any> {

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

  componentWillUnmount() {
    console.log("component will unmount");
    
  }

  render() {
    console.log("rendering");    
    return (
      <button onClick={this.update}>{this.state.val}</button>
    );
  }
}

class Wrapper extends Component<any, any> {

  mount() {
    return ReactDOM.render(<App />, document.getElementById('a')) 
  }

  unmount() {
    return ReactDOM.unmountComponentAtNode(document.getElementById('a'));
  }

  render() {
    return (
      <div>
        <button onClick={this.mount.bind(this) }>Mount</button>
        <button onClick={this.unmount.bind(this) }>Unmount</button>
        <div id="a"></div>
      </div>
    );
  }
}


ReactDOM.render(
  <Wrapper />,
  document.getElementById('root')
);