import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/">
          <header>
            <h1>Dark Souls Guidebook</h1>
          </header>
        </Link>
        {this.props.children}
      </div>
    );
  }
}

export default App;
