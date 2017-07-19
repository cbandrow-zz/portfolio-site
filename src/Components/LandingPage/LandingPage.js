import React from 'react';

const LandingPage = ({background}) => {
  return(
    <section className = {`landing-page ${background}`}>
      <div className = "intro">
        <h1>Chris Bandrowsky</h1>
        <h2>Design Driven Development</h2>
      </div>
    </section>
  )
}

export default LandingPage
