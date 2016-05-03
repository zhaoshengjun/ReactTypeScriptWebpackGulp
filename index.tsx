import * as React from 'react';
import {Component, PropTypes} from 'react';

import * as ReactDOM from 'react-dom';

class App extends Component<any, any> {
  static defaultProps;
  constructor(props) {
    super(props);   
    this.state = {
      increasing: false
    };
    this.update = this.update.bind(this);
  }

  update() {
    ReactDOM.render(<App val={this.props.val + 1} />, document.getElementById('root'));
  }

  componentWillReceiveProps(nextProps) {  
    this.setState({
      increasing: nextProps.val > this.props.val
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.val % 5 === 0;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps: ', prevProps);
    
  }
  render() {
    console.log(this.state.increasing);
    
    return (
      <button onClick={this.update}>{this.props.val}</button>
    );
  }
}

App.defaultProps = {
  val: 0
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);