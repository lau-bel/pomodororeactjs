import React, { Component } from 'react';

import './App.css';

function ButtonMinus(props){
    return (

        <div className = "ButtonMinus">

        <button class="minus"

          onClick={props.onClick}
        >

        -

        </button>

        </div>


    )

    }




export default ButtonMinus;
