import React, { Component } from 'react';


export default class LandingPage extends Component {
  constructor(){
    super()
    this.state = {
      background: 'light',
    }
  }

  componentDidMount(){
    setInterval(() =>{
      this.setState({
        background: this.changeBackground()
      })
    }, 15000)
  }

  changeBackground(){
    switch (this.state.background){
      case 'light':
        return 'medium'
      case 'medium':
        return 'dark'
      case 'dark':
        return 'light'
      default :
        return 'light'
    }
  }

  render(){
    return(
      <section className = {`landing-page ${this.state.background}`}>
        Hello
      </section>
    )
  }
}
// let bgImageArray = ["./images/light.svg", "./images/medium.svg", "./images/dark.svg"],
// secs = 4;
// bgImageArray.forEach((img) =>{
//     new Image().src = img;
//     // caches images, avoiding white flash between background replacements
// });
//
//
// let backgroundSequence = () =>{
// 	window.clearTimeout();
// 	var k = 0;
// 	for (let i = 0; i < bgImageArray.length; i++) {
// 		setTimeout(()=>{
// 			document.querySelector('.landing-page').style.background = `url(${bgImageArray[k]}) no-repeat center center fixed`
// 			document.querySelector('.landing-page').style.backgroundSize ="cover";
// 		if ((k + 1) === bgImageArray.length) { setTimeout(() => { backgroundSequence() }, (secs * 1000))} else { k++; }
//   }, (secs * 1000) * i)
// 	}
// }
// backgroundSequence();
