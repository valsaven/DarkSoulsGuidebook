import React, { Component } from 'react';
import { Link } from 'react-router';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/">
          <div className="App-header">
            <h1>Dark Souls Guidebook</h1>
          </div>
        </Link>
        <div className="App-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
