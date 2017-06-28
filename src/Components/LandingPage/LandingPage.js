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
        <div className = "intro">
          <h1>Chris Bandrowsky</h1>
          <h2>Design Driven Development</h2>
        </div>
      </section>
    )
  }
}
