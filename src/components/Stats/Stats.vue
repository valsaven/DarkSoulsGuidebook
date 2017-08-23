import React, { Component } from 'react';
import stats from './stats.json';

function StatsMenu() {
  const Stats = stats.map((item) =>
    <div className="content-item">
      <p>{item.title}</p>
      <ul>
        {item.items.map((element) => <li>{element}</li>)}
      </ul>
    </div>
  );
  return (
    <div className="container">{Stats}</div>
  );
}

class Stats extends Component {
  render() {
    return (
      <StatsMenu/>
    )
  }
}

export default Stats;
