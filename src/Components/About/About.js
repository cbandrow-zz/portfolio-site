import React from 'react';

const About = (background) =>{
  return(
    <section className = {`about ${background.background}-solid`}>
      <div className = "about-details">
        <h1>I'm Chris Bandrowsky</h1>
        <h2>Front-End Enginer, Designer, and All-Star Nerd.</h2>
        <p>I’m a graphic designer turned front-end engineer. I strive to blend my creative talents with my coding skills to design meaningful applications and user experiences. My background in design allows me to leverage design skills to create intuitive, functional, and effective applications and software. I work and strive to be part of a team that creates software to enhance user's lives. </p>
        <p>When I'm not coding, I'm a goofy dude who loves taking scenic drives, practicing my photography skills, and going to concerts. I'm a car nerd who often gets lost spending hours reading auto reviews. I'm always curious about new tech trends and am interested in products and services that seem to blend technology and functionality to enhance our lives. I'm always watching out for designs influential design trends. </p>
        <div className = "about-background">
          <h2>Education</h2>
          <h3>Turing School of Software and Design</h3>
          <p>Front-End Engineering Program</p>
          <h3>University of Denver</h3>
          <p>BA in Emergent Digital Practices, Minors in Leadership and Business</p>
          <h2>Work</h2>
          <h3>Graphic Design and Web Coordinator</h3>
          <p>University of Denver, Student Life</p>
          <h3>Web Developer</h3>
          <p>University of Denver, Driscoll Student Center</p>
          <h3>Discoveries Orientation Intern</h3>
          <p>University of Denver, Discoveries Orientation Program</p>
        </div>
      </div>
      <div className = "about-skills">
        <h1>What I Do:</h1>
        <section className = "skill-container">
        <div className = "front-end-skills">
          <h3>Front End Technology</h3>
          <img src = {`../../Assets/${background.background}-front.svg`}/>
          <ul>
            <li>HTML 5</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>jQuery</li>
            <li>React JS</li>
            <li>Redux</li>
          </ul>
        </div>
        <div className = "back-end-skills">
          <h3>Back End Technology</h3>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>Knex</li>
            <li>PostgreSQL Databases</li>
            <li>RESTful API Calls</li>
          </ul>
        </div>
        <div className = "testing-skills">
          <h3>Testing</h3>
          <ul>
            <li>Test Driven Development</li>
            <li>Mocha</li>
            <li>Chai</li>
            <li>Enzyme</li>
            <li>Jest</li>
          </ul>
        </div>
        <div className = "workflow-skills">
          <h3>Workflow</h3>
          <ul>
            <li>Git</li>
            <li>Github</li>
            <li>Pushing to Heroku</li>
            <li>Trello and Waffle.io</li>
            <li>Circle CI</li>
          </ul>
        </div>
        <div className = "design-skills">
          <h3>Design</h3>
          <ul>
            <li>Responsive Web Design</li>
            <li>User Interface/User Experience Design</li>
            <li>Adobe Creative Suite (Photoshop, Illustrator, InDesign, Lightroom)</li>
            <li>Sketch</li>
          </ul>
        </div>
      </section>
      </div>
    </section>
  )
}

export default About
