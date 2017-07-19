import React, { Component } from 'react';
import LandingPage from './Components/LandingPage/LandingPage'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      background: 'light'
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

  retrieveBackground(landingState){
    this.setState({
      background: landingState
    })
    return landingState
  }

  render() {
    return (
      <main className={`App ${this.state.background}-solid`}>

        <LandingPage background = {this.state.background}/>
        <About background = {this.state.background}/>
        <Projects />
        <Contact background = {this.state.background}/>
      </main>
    );
  }
}

export default App;
