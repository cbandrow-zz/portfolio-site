import React from 'react';
import cartographer from '../../Assets/cartographer.gif'
import movietracker from '../../Assets/movietracker.gif'
import swapibox from '../../Assets/swapibox.gif'
import jetfuel from '../../Assets/jetfuel.gif'
import staticcomp from '../../Assets/staticcomp.png'

const Projects = () =>{
  return(
    <section className = "projects">
      <div className = "projects-wrapper">
        <h1>Projects</h1>
        <div className="project-indiv">
          <div className ="project-details">
            <h2>Car-Tographer</h2>
            <p>Car-Tographer is an application to allow a user to identify the potential make and model of a car they've seen and taken a picture of. The application uses Google's Cloud Vision API to identify potential subjects of the image, including makes and models. Behind the scenes, the results are matched and filtered out to determine the most promising make and model. A user can then click on the result, and display some information, courtesy of Edmunds Vehicle API, about the car they've selected. A call is also made to Microsoft's Image Search service to grab stock images of the vehicle based on the year.</p>
            <h3>Code Tools Used: </h3>
            <p>ReactJS, Google Cloud Vision API, Bing Image Search, Edmunds Vehicle API, Express</p>
          </div>
          <div className ="project-images">
            <img src = {cartographer} alt="Car-Tographer User interaction"/>
            <a href= "https://github.com/cbandrow/personal-project">Github Repo</a>
          </div>
        </div>

        <div className="project-indiv">
          <div className ="project-details">
            <h2>Jet Fuel</h2>
            <p>Jet Fuel is at it's core, a URL shortener. As my first experience working closely with the back-end, the application creates folders and routes that can redirect a shortened URL to the proper original website. The application allows user to save their shortened-urls to a database for future reference.</p>
            <h3>Code Tools Used: </h3>
            <p>jQuery, NodeJS, Express</p>
          </div>
          <div className ="project-images">
            <img src = {jetfuel} alt="Jet-Fuel user interaction"/>
            <a href= "https://github.com/lauraturk/jet_fuel">Github Repo</a>
            <a href= "http://lt-cb-jet.herokuapp.com/">Heroku Site</a>
          </div>
        </div>
        <div className="project-indiv">
          <div className ="project-details">
            <h2>SWApibox</h2>
            <p>SWApibox was a project focused on dealing with API calls and Javascript Promises. The Star Wars API was the dataset used for the application. The API had several additionally nested urls to retrieve more data, which caused complexities in retrieving all data at the same time, and rendering all data to the DOM in a timely manner. Users can load into the site and select their favorite people, planets, and vehicles from the Star Wars universe. These favorites are then saved, so a user can navigate and view their favorites in the future. Users can additionally remove their favorites as well.</p>
            <h3>Code Tools Used: </h3>
            <p>ReactJS, fetchMock for Testing, Star Wars API</p>
          </div>
          <div className ="project-images">
            <img src = {swapibox} alt="SWApibox user interaction"/>
            <a href= "https://github.com/cbandrow/swapibox">Github Repo</a>
          </div>
        </div>
        <div className="project-indiv">
          <div className ="project-details">
            <h2>Static Comp Challenge</h2>
            <p>This static comp was the result of a challenge our cohort was given to recreate a website from scratch, only following a basic image. Text content, colors, and images could be improvised by the developer. The site was required to be responsive, and usable on mobile devices. This specific challenge required recreating a enterprise level site, one that would require multiple moving parts and multiple interactive sections for official business use. </p>
            <h3>Code Tools Used: </h3>
            <p>HTML 5, CSS3</p>
          </div>
          <div className ="project-images">
            <img src = {staticcomp} alt = "Static Comp Challenge"/>
            <a href= "https://github.com/cbandrow/cb-comp-challenge-3">Github Repo</a>
            <a href= "https://cbandrow.github.io/cb-comp-challenge-3/">Github Pages Site</a>
          </div>
        </div>
        <div className="project-indiv">
          <div className ="project-details">
            <h2>MovieTracker</h2>
            <p>MovieTracker was a project similar in functionality to SWApibox. It allows a user to store and track movies they are interested in seeing that are releasing soon. However, the project incorporates the use of a backend to make internal API calls for getting, updating, posting, and deleting data. Users must create an account, and login to begin tracking their movies.</p>
            <h3>Code Tools Used: </h3>
            <p>ReactJS, Redux, Router, Express, Movie Database API</p>
          </div>
          <div className ="project-images">
            <img src = {movietracker} alt="Movie Tracker user interaction"/>
            <a href= "https://cb-movietracker.herokuapp.com/">Heroku Site</a>
            <a href= "https://github.com/kamos1/movie-tracker">Github Repo</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
