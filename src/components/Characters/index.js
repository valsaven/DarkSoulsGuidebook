import React, { Component } from 'react';
import chars from './characters.json';

function CharactersMenu() {
  const Characters = chars.map((item) =>
    <div className="content-item">
      <p>{item.title}</p>
      <ul>
        {item.items.map((element) => <li>{element}</li>)}
      </ul>
    </div>
  );
  return (
    <div className="container">{Characters}</div>
  );
}

class Characters extends Component {
  render() {
    return (
      <CharactersMenu/>
    )
  }
}

export default Characters;
