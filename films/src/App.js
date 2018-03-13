import React, { Component } from 'react';
import '../src/app.css';
import Header from '../src/Header';
import Results from '../src/Results';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Header />
        <Results />
      </React.Fragment>
    )
  }
}

export default App;
