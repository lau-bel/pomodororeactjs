import React, { Component } from 'react';
import Logo from './logo.js';
import Timer from './timer.js';

import './App.css';

class App extends Component {
  render() {
    return (

      <div className="App">

       <Logo />
       <h1>Work or die.</h1>

       <Timer />

      </div>

    );
  }
}

export default App;
