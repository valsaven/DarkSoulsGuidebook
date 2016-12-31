import React, { Component } from 'react';
import locations from './locations.json';

function LocationsMenu() {
  const Locations = locations.map((item) =>
    <div className="content-item">
      <p>{item.title}</p>
      <ul>
        {item.items.map((element) => <li>{element}</li>)}
      </ul>
    </div>
  );
  return (
    <div className="container">{Locations}</div>
  );
}

class Locations extends Component {
  render() {
    return (
      <LocationsMenu/>
    )
  }
}

export default Locations;
