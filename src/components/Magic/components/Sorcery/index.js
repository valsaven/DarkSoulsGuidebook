import React, {Component} from 'react';
import sorcery from './sorcery.json';

function SorceryMenu() {
  const Sorcery = sorcery.map((item) =>
      <div className="content-item">
        <p>{item.title}</p>
        <ul>
          {item.items.map((element) => <li>{element}</li>)}
        </ul>
      </div>
  );
  return (
    <div className="container">{Sorcery}</div>
  );
}

class Sorcery extends Component {
  render() {
    return (
      <SorceryMenu/>
    )
  }
}

export default Sorcery;
