import React, { Component } from 'react';
import LandingPage from './Components/LandingPage/LandingPage'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="App">
        <Navbar />
        <LandingPage />
        <About />
        <Projects />
        <Contact />
      </main>
    );
  }
}

export default App;
