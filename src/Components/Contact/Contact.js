import React from 'react';

import dark_email from '../../Assets/dark-email.svg'
import dark_git from '../../Assets/dark-git.svg'
import dark_linkedin from '../../Assets/dark-linkedin.svg'

import medium_email from '../../Assets/medium-email.svg'
import medium_git from '../../Assets/medium-git.svg'
import medium_linkedin from '../../Assets/medium-linkedin.svg'

import light_email from '../../Assets/light-email.svg'
import light_git from '../../Assets/light-git.svg'
import light_linkedin from '../../Assets/light-linkedin.svg'

const linkedin = [dark_linkedin, medium_linkedin, light_linkedin]
const git = [dark_git, medium_git, light_git]
const email = [dark_email, medium_email, light_email]

const Contact = (background) =>{
  let colorEmail = email.find((color) =>{
    return color.includes(background.background)
  })

  let colorGit = git.find((color) =>{
    return color.includes(background.background)
  })

  let colorLinkedin = linkedin.find((color) =>{
    return color.includes(background.background)
  })

  console.log(colorEmail)
  return(
    <section className = "contact">
      <h1>Contact</h1>
      <p>You can find me here on the internet.</p>
      <div className = "contact-content">

        <div className = "contact-item">
          <img src = {colorEmail}/>
          <h3>Email: <a href="mailto:chris.bandrowsky@gmail.com">chris.bandrowsky@gmail.com</a></h3>
        </div>
        <div className = "contact-item">
          <img src = {colorGit}/>
          <h3>Github: <a href="www.github.com/cbandrow">Chris Bandrowsky Github</a></h3>
        </div>
        <div className = "contact-item">
          <img src = {colorLinkedin}/>
          <h3>LinkedIn: <a href="www.linkedin.com/in/chrisbandrowsky">Chris Bandrowsky LinkedIn Page</a></h3>
        </div>
      </div>
    </section>
  )
}

export default Contact
