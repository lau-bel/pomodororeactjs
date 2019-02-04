import React, { Component } from 'react';
import ImageLogo from './HELL-POMODORO.png';

import './App.css';

class Logo extends Component {
  render() {
    return (
       <div className="Logo">
        <img  src= {ImageLogo} alt="logo tomato"/>
      </div>

    );
  }
}

export default Logo;
