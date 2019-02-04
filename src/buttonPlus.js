import React, { Component } from 'react';

import './App.css';

function ButtonPlus(props){
    return (

        <div className = "ButtonPlus">

        <button class="plus"

            onClick={props.onClick}

          >

        +

        </button>

        </div>


    )

    }



export default ButtonPlus;
