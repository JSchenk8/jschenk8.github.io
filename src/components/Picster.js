import React from 'react'

import AwesomeSlider from 'react-awesome-slider'
import AwesomeSliderStyles from 'react-awesome-slider/src/styles'
import picsterHome2 from '../images/picsterHome2.png'
import picsterExplore from '../images/picsterExplore.png'
import picsterUpload from '../images/picsterUpload.png'
import picsterComment from '../images/picsterComment.png'

import { DiGithubBadge } from 'react-icons/di'
import { GoLink } from 'react-icons/go'
import { IconContext } from 'react-icons/lib'

export default function Picster() {
  return <section className="hero is-fullheight picster-image" id="picster">
    <div className="hero-body is-justify-content-center">
      <div className="box" id="project-box">
        <div className="columns is-desktop">
          <div className="column carouselDiv has-text-centered">
            <div className="has-text-centered">
              <AwesomeSlider animation="cubeAnimation" cssModule={AwesomeSliderStyles}>
                <div className="carouselItem" data-src={picsterHome2} />
                <div className="carouselItem" data-src={picsterExplore} />
                <div className="carouselItem" data-src={picsterUpload} />
                <div className="carouselItem" data-src={picsterComment} />
              </AwesomeSlider>
            </div>
            <div className="has-text-centered mt-6">
              <IconContext.Provider value={{ color: 'darkblue' }}>
                <a href="https://github.com/JSchenk8/project-4" target="blank"><button className="button m-2 is-large"><DiGithubBadge /></button></a>
                <a href="https://picster-gaproject.herokuapp.com/" target="blank"><button className="button m-2 is-large"><GoLink /></button></a>
              </IconContext.Provider>
              <p>Feel free to check out the code or the full site</p><br />
            </div>
          </div>
          <div className="column">
            <div>
              <p className="title">Picster</p><br />
              <p>Picster is a responsively designed photo editing and sharing app created as a week long group project. It was the final project for General Assembly's Software Engineering Immersive, and built using Python and Flask alongside a React front end.</p><br />
              <p>As a group of three, we utilised project management tools to plan and implement our project in the short time frame, plotting out a user experience which included registration, login, photo editing, uploading, and sharing. Furthermore, we enabled users to like photos, comment on photos and follow other users. </p><br />
              <p>I worked hard on the back end to create a many-to-many relationship between users, allowing them to follow each other. I also utilised test-driven-development and the pytest library to build a test suite for the back end.</p><br />
              <p>On the front end, I integrated a third party library made by ToastUI which enables users on desktop to edit their photographs before uploading them to the site. </p><br />
              <p>I also wrote custom CSS to responsively tile uploaded photos regardless of aspect ratio, giving the explore page and user profiles a dynamic feel. </p><br />
              <p>This project was built using Python and Flask on the back end, tested with Pytest, and has a front end built in React, with HTML and SCSS and styled with a combination of custom CSS and the Bulma framework. It integrates a front end JavaScript library called ToastUI and has authentication using bcrypt and JSON Web Tokens.</p><br />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </section>
}