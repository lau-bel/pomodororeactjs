(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(t,e,n){t.exports=n.p+"static/media/HELL-POMODORO.4229c1c6.png"},12:function(t,e,n){t.exports=n(27)},18:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n.n(a),i=n(10),c=n.n(i),r=(n(18),n(2)),u=n(3),o=n(5),l=n(4),m=n(6),d=n(11),h=n.n(d),b=(n(7),function(t){function e(){return Object(r.a)(this,e),Object(o.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return s.a.createElement("div",{className:"Logo"},s.a.createElement("img",{src:h.a,alt:"logo tomato"}))}}]),e}(a.Component)),O=n(1);var v=function(t){return s.a.createElement("div",{className:"ButtonPlus"},s.a.createElement("button",{class:"plus",onClick:t.onClick},"+"))};var f=function(t){return s.a.createElement("div",{className:"ButtonMinus"},s.a.createElement("button",{class:"minus",onClick:t.onClick},"-"))};var j=function(t){return s.a.createElement("div",{className:"Start"},s.a.createElement("button",{class:"start",onClick:t.onClick},t.content))},k=n(8),p=n.n(k),E=function(t){function e(){return Object(r.a)(this,e),Object(o.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return s.a.createElement(p.a,{url:"./Hallow_Wind.mp3",playStatus:p.a.status.PLAYING})}}]),e}(a.Component),g=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(o.a)(this,Object(l.a)(e).call(this,t))).AddMinutes=n.AddMinutes.bind(Object(O.a)(Object(O.a)(n))),n.DeleteMinutes=n.DeleteMinutes.bind(Object(O.a)(Object(O.a)(n))),n.DecreasedOn=n.DecreasedOn.bind(Object(O.a)(Object(O.a)(n))),n.tick=n.tick.bind(Object(O.a)(Object(O.a)(n))),n.mySound=s.a.createRef(),n.state={minutes:20,seconds:"00",running:!1,currentTime:"",text:"Start"},n}return Object(m.a)(e,t),Object(u.a)(e,[{key:"AddMinutes",value:function(){this.state.minutes<=59&&this.setState({minutes:this.state.minutes+1})}},{key:"DeleteMinutes",value:function(){this.state.minutes>0&&this.setState({minutes:this.state.minutes-1})}},{key:"tick",value:function(){var t=Math.floor(this.secondsRemaining/60),e=this.secondsRemaining-60*t;this.setState({minutes:t,seconds:e}),e<10&&this.setState({seconds:"0"+this.state.seconds}),t<10&&this.setState({minutes:"0"+this.state.minutes}),0===t&0===e&&clearInterval(this.intervalHandle),this.secondsRemaining--}},{key:"DecreasedOn",value:function(){if(this.state.running)clearInterval(this.intervalHandle),this.setState({running:!1,minutes:this.state.currentTime,seconds:"00",text:"Restart"});else{this.setState({running:!0,currentTime:this.state.minutes,text:"Reset"}),this.intervalHandle=setInterval(this.tick,1e3);var t=this.state.minutes;this.secondsRemaining=60*t,this.state.minutes<10&&this.setState({minutes:"0"+this.state.minutes})}if(0==this.state.minutes&0==this.secondsRemaining)return s.a.createElement(E,null)}},{key:"render",value:function(){var t=this;return s.a.createElement("div",{className:"Timer",class:"timer"},s.a.createElement("div",{class:"clock"},s.a.createElement("p",null," ",this.state.minutes," : ",this.state.seconds),s.a.createElement("div",{class:"buttons"},s.a.createElement(v,{onClick:function(){return t.AddMinutes()}}),s.a.createElement(j,{onClick:function(){return t.DecreasedOn()},content:this.state.text}),s.a.createElement(f,{onClick:function(){return t.DeleteMinutes()}}))))}}]),e}(a.Component),y=function(t){function e(){return Object(r.a)(this,e),Object(o.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(b,null),s.a.createElement("h1",null,"Work or die."),s.a.createElement(g,null))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},7:function(t,e,n){}},[[12,2,1]]]);
//# sourceMappingURL=main.06f09e76.chunk.js.map