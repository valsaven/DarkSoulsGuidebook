import React, { Component } from 'react';
import armor from './armor.json';

function ArmorMenu() {
  const Armor = armor.map((item) =>
    <div className="content-item">
      <p>{item.title}</p>
      <ul>
        {item.items.map((element) => <li>{element}</li>)}
      </ul>
    </div>
  );
  return (
    <div className="container">{Armor}</div>
  );
}

class Armor extends Component {
  render() {
    return (
      <ArmorMenu/>
    )
  }
}

export default Armor;
