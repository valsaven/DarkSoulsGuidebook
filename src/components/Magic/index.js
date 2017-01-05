import React, { Component } from 'react';
import { Link } from 'react-router';
import magic from './magic.json';

function MagicMenu() {
  const Magic = magic.map((item) =>
    <Link to={`/magic/${item.title.toLowerCase()}`}>
      <div className="content-item">
        <p>{item.title}</p>
      </div>
    </Link>
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
