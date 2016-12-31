import React, { Component } from 'react';
import weapons from './weapons.json';
import './style.css';

function WeaponsItems() {
  const weaponsItems = weapons.map((item) =>
    <div className="content-item">
      <p>{item.title}</p>
      <ul>
        {item.items.map((element) => <li>{element}</li>)}
      </ul>
    </div>
  );
  return (
    <div className="container">{weaponsItems}</div>
  );
}

class Weapons extends Component {
  render() {
    return (
      <WeaponsItems/>
    )
  }
}

export default Weapons;
