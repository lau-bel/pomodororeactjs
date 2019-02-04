import React, { Component } from 'react';
import Sound from 'react-sound'

export default class Alert extends Component {

render() {
 return (
   <Sound
   url='./Hallow_Wind.mp3'
   playStatus={Sound.status.PLAYING}
  
   />
  );
 }
}
