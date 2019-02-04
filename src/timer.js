import React, { Component } from 'react';
import ButtonPlus from './buttonPlus.js';
import ButtonMinus from './ButtonMinus.js';
import StartButton from './startbutton.js';
import Sound from './react-sound.js';



import './App.css';

class Timer extends Component {

  constructor(props){
    super(props);
      this.AddMinutes = this.AddMinutes.bind(this);
      this.DeleteMinutes = this.DeleteMinutes.bind(this);
      this.DecreasedOn = this.DecreasedOn.bind(this);
      this.tick = this.tick.bind(this);
      this.mySound = React.createRef();
      this.state = {
        minutes : 20,
        seconds : 0 + "0",
        running : false,
        currentTime: "",
        text : "Start"
      }

  }


  AddMinutes(){

      var min = this.state.minutes

      if (min <= 59){
          this.setState({
          minutes: (this.state.minutes +1),

    })
  }
}

  DeleteMinutes(){
    var min = this.state.minutes
    if (min > 0){
    this.setState({

      minutes: (this.state.minutes -1),

    })
  }

  }

  tick() {

    var min = Math.floor(this.secondsRemaining / 60);
    var sec = this.secondsRemaining - (min * 60);

  this.setState({
    minutes: min,
    seconds: sec
  })

  if (sec < 10) {
    this.setState({
      seconds: "0" + this.state.seconds,
    })
  }

  if (min < 10) {

    this.setState({
      minutes: "0" + this.state.minutes,
    })

  }


  if (min === 0 & sec === 0) {
      clearInterval(this.intervalHandle);

  }

      this.secondsRemaining--

  }


  DecreasedOn(){


    if(!this.state.running){
      this.setState({
        running: true,
        currentTime: this.state.minutes,
        text: "Reset"
      })

          this.intervalHandle = setInterval(this.tick, 1000);

          let time = this.state.minutes;

          this.secondsRemaining = time * 60;

          if (this.state.minutes < 10){

            this.setState({
              minutes : "0" + this.state.minutes,
            })
          }
    }

    else{
      clearInterval(this.intervalHandle);
        this.setState({
          running: false,
          minutes: this.state.currentTime,
          seconds: 0 + "0",
          text: "Restart"

       })

      }

      const min = this.state.minutes;
      const sec = this.secondsRemaining;
      if (min == 0 & sec == 0) {
        return(
          <Sound />
        );
      }




}

  render() {
    return (
       <div className="Timer" class="timer">

          <div class="clock">
          <p> {this.state.minutes} : {this.state.seconds}</p>

          <div class = "buttons">
          <ButtonPlus
              onClick ={()=>this.AddMinutes()}
           />

           <StartButton
                onClick={()=>this.DecreasedOn()}
                content={this.state.text}
            />

          <ButtonMinus
            onClick ={()=>this.DeleteMinutes()} />
            </div>
        </div>
      </div>

    );
  }
}


export default Timer;
