import React, { Component } from 'react';
import online from './online.json';

function OnlineMenu() {
  const Online = online.map((item) =>
    <div className="content-item">
      <p>{item.title}</p>
      <ul>
        {item.items.map((element) => <li>{element}</li>)}
      </ul>
    </div>
  );
  return (
    <div className="container">{Online}</div>
  );
}

class Online extends Component {
  render() {
    return (
      <OnlineMenu/>
    )
  }
}

export default Online;
