import React, { Component } from 'react';
import { Link } from 'react-router';

import Header from '../Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/">
          <Header/>
        </Link>
        {this.props.children}
      </div>
    );
  }
}

export default App;
