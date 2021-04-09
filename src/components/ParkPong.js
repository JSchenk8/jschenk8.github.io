import React from 'react'

import AwesomeSlider from 'react-awesome-slider'
import AwesomeSliderStyles from 'react-awesome-slider/src/styles'

import parkpongHome from '../images/parkpongHome.png'
import parkpongMap from '../images/parkpongMap.png'
import parkpongEvents from '../images/parkpongEvents.png'
import parkpongLogin from '../images/parkpongLogin.png'

import { DiGithubBadge } from 'react-icons/di'
import { GoLink } from 'react-icons/go'
import { IconContext } from 'react-icons/lib'

export default function ParkPong() {
  return <section className="hero is-fullheight parkpong-image" id="parkpong">
    <div className="hero-body is-justify-content-center">
      <div className="box" id="project-box">
        <div className="columns is-desktop">
          <div className="column carouselDiv has-text-centered">
            <div className="">
              <AwesomeSlider animation="cubeAnimation" cssModule={AwesomeSliderStyles}>
                <div className="carouselItem" data-src={parkpongHome} />
                <div className="carouselItem" data-src={parkpongMap} />
                <div className="carouselItem" data-src={parkpongEvents} />
                <div className="carouselItem" data-src={parkpongLogin} />
              </AwesomeSlider>
            </div>
            <div className="has-text-centered mt-6">
              <IconContext.Provider value={{ color: 'darkblue' }}>
                <a href="https://github.com/JSchenk8/project-3" target="blank"><button className="button m-2 is-large"><DiGithubBadge /></button></a>
                <a href="https://park-pong.herokuapp.com/" target="blank"><button className="button m-2 is-large"><GoLink /></button></a>
              </IconContext.Provider>
              <p>Feel free to check out the code or the full site</p><br />
            </div>
          </div>
          <div className="column">
            <div>
              <p className="title">Park Pong</p><br></br>

              <p>Park Pong was a week long project built using the MERN stack, where I worked with a group of three others to create a crowd-sourced public ping pong table sharing app. </p><br />
              <p>Users can view a map of ping pong tables free to use, check out events happening at different locations, and see the users registered on the page. </p><br />
              <p>Then, if they want to, they can create their own profiles, add new locations and events, comment on other people’s events, click to attend them and comment on locations and write messages on other users message boards. </p><br />
              <p>On the back end, I worked to create all the planning materials, before focusing on the code framework, such as seeding programs and middleware. I then took an interest in writing tests using Mocha and Chai, and made sure we had a complete test suite for the whole back end, which included twenty-nine CRUD operations across fourteen end points. </p><br />
              <p>On the front end I created our register and login page, taking extra time to write error validation for each field to ensure a smooth user journey. I integrated the Cloudinary upload system so users can upload profile pictures. </p><br />
              <p>I then oversaw the global styling of the page, giving it a universal look across all pages. It was styled using the Bulma framework and editing SCSS variables along with some CSS.</p><br />
              <p>This project was built using JavaScript and MongoDB on the back end, tested using Mocha and Chai nad has a front end built using React, HTML and SCSS, styled with the Bulma framework. It also integrates a javascript Map library, NodeMailer emailing system and authentication using bcrypt and JSON Web Tokens.</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </section>
}