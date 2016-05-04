import * as React from 'react';
import {Component} from 'react';
import * as ReactDOM from 'react-dom';

class App extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, name: 'Simon Baily' },
        { id: 2, name: 'Thomas Burleson' },
        { id: 3, name: 'Will Button' },
        { id: 4, name: 'Ben Clinkinbeard' },
        { id: 5, name: 'Kent Dodds' },
        { id: 6, name: 'Trevor Ewen' },
        { id: 7, name: 'Aaron Frost' },
        { id: 8, name: 'Joel Hooks' },
        { id: 9, name: 'Jafar Husain' },
        { id: 10, name: 'Tim Kindberg' },
        { id: 11, name: 'Hohn Lindquist' },
        { id: 12, name: 'Joe Maddalone' },
        { id: 13, name: 'Tyler McGinnis' },
        { id: 14, name: 'Scott Moss' },
        { id: 15, name: 'Robert Penner' },
        { id: 16, name: 'Keith Peters' },
        { id: 17, name: 'Lukas Ruebbelke' },
        {id:18, name:'Brett Shollenberger'}
      ]
    }
  }
  
  render() {
    let rows = this.state.data.map(person => {
      return <PersonRow key={person.id} data={person} />
    })
    return (
      <div>
        <table className="table table-striped">
            <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}
class PersonRow extends Component<any, any> {

  render() {
    return (
      <tr>
        <th scope="row">{this.props.data.id}</th>
        <td>{this.props.data.name}</td>
      </tr>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);