import React, { Component } from 'react';
import items from './items.json';

function ItemsMenu() {
  const Items = items.map((item) =>
    <div className="content-item">
      <p>{item.title}</p>
      <ul>
        {item.items.map((element) => <li>{element}</li>)}
      </ul>
    </div>
  );
  return (
    <div className="container">{Items}</div>
  );
}

class Items extends Component {
  render() {
    return (
      <ItemsMenu/>
    )
  }
}

export default Items;
