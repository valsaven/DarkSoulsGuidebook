import React, { Component } from 'react';
import weapons from './weapons.json';
import './style.css';

function WeaponsMenu() {
  const Weapons = weapons.map((item) =>
    <div className="content-item">
      <p>{item.title}</p>
      <ul>
        {item.items.map((element) => <li>{element}</li>)}
      </ul>
    </div>
  );
  return (
    <div className="container">{Weapons}</div>
  );
}

class Weapons extends Component {
  render() {
    return (
      <WeaponsMenu/>
    )
  }
}

export default Weapons;
