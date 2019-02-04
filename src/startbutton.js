import React, { Component } from 'react';

import './App.css';

function StartButton (props) {

    return (

      <div className = "Start">

      <button class="start"

        onClick={props.onClick}

        >

            {props.content}

      </button>

      </div>
    );
  }



export default StartButton;
