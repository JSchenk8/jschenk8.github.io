import React from 'react'

import AwesomeSlider from 'react-awesome-slider'
import AwesomeSliderStyles from 'react-awesome-slider/src/styles'

import { DiGithubBadge } from 'react-icons/di'
import { GoLink } from 'react-icons/go'

export default function ParkPong() {
  return <section className="hero is-fullheight parkpong-image" id="parkpong">
    <div className="hero-body is-justify-content-center">
      <div className="box">
        <div className="columns">
          <div className="column carouselDiv has-text-centered">
            <div className="">
              <AwesomeSlider animation="cubeAnimation" cssModule={AwesomeSliderStyles}>
                <div className="carouselItem" data-src="../images/parkpongHome.png" />
                <div className="carouselItem" data-src="../images/parkpongMap.png" />
                <div className="carouselItem" data-src="../images/parkpongEvents.png" />
                <div className="carouselItem" data-src="../images/parkpongLogin.png" />
              </AwesomeSlider>
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
              <p>Please take a look at the website or the code below!</p><br />
            </div>
            <div className="has-text-centered">
              <a href="https://github.com/JSchenk8/project-3" target="blank"><button className="button m-2"><DiGithubBadge /></button></a>
              <a href="https://park-pong.herokuapp.com/" target="blank"><button className="button m-2"><GoLink /></button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}