import React, { Component } from 'react';
import magic from './magic.json';

function MagicMenu() {
  const Magic = magic.map((item) =>
    <div className="content-item">
      <p>{item.title}</p>
    </div>
  );
  return (
    <div className="container">{Magic}</div>
  );
}

class Magic extends Component {
  render() {
    return (
      <MagicMenu/>
    )
  }
}

export default Magic;
