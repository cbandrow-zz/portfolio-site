import React from 'react';

const Contact = (background) =>{
  return(
    <section className = "contact">
      <div className = "contact-wrapper">
        <h1>Contact</h1>
        <p>You can find me here on the internet. Or carrier pidgeon. Not sure how well those work those. So yeah, get at me through one of the links below. </p>
        <div className = "contact-content">
          <div className = "contact-item">
            <div className = {`contact-icons ${background.background}-contact-email`}>
            </div>
            <h3><a href="mailto:chris.bandrowsky@gmail.com">chris.bandrowsky@gmail.com</a></h3>
          </div>
          <div className = "contact-item">
            <div className = {`contact-icons ${background.background}-contact-git`}>
            </div>
            <h3><a href="www.github.com/cbandrow">Github</a></h3>
          </div>
          <div className = "contact-item">
            <div className = {`contact-icons ${background.background}-contact-linkedin`}>
            </div>
            <h3><a href="www.linkedin.com/in/chrisbandrowsky">LinkedIn</a></h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
