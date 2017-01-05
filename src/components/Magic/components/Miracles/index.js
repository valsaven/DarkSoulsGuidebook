import React, {Component} from 'react';
import miracles from './miracles.json';

function MiraclesMenu() {
  const Miracles = miracles.map((item) =>
    <div className="content-item">
      <p>{item.title}</p>
      <ul>
        {item.items.map((element) => <li>{element}</li>)}
      </ul>
    </div>
  );
  return (
    <div className="container">{Miracles}</div>
  );
}

class Miracles extends Component {
  render() {
    return (
      <MiraclesMenu/>
    )
  }
}

export default Miracles;
