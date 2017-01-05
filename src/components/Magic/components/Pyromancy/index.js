import React, {Component} from 'react';
import pyromancy from './pyromancy.json';

function PyromancyMenu() {
  const Pyromancy = pyromancy.map((item) =>
    <div className="content-item">
      <p>{item.title}</p>
      <ul>
        {item.items.map((element) => <li>{element}</li>)}
      </ul>
    </div>
  );
  return (
    <div className="container">{Pyromancy}</div>
  );
}

class Pyromancy extends Component {
  render() {
    return (
      <PyromancyMenu/>
    )
  }
}

export default Pyromancy;
