import React from 'react'

import AwesomeSlider from 'react-awesome-slider'
import AwesomeSliderStyles from 'react-awesome-slider/src/styles'

import { DiGithubBadge } from 'react-icons/di'
import { GoLink } from 'react-icons/go'

export default function Picster() {
  return <section className="hero is-fullheight picster-image" id="picster">
    <div className="hero-body is-justify-content-center">
      <div className="box">
        <div className="columns">
          <div className="column carouselDiv has-text-centered">
            <div className="">
              <AwesomeSlider animation="cubeAnimation" cssModule={AwesomeSliderStyles}>
                <div className="carouselItem" data-src="../images/picsterHome2.png" />
                <div className="carouselItem" data-src="../images/picsterExplore.png" />
                <div className="carouselItem" data-src="../images/picsterUpload.png" />
                <div className="carouselItem" data-src="../images/picsterComment.png" />
              </AwesomeSlider>
            </div>
          </div>
          <div className="column">
            <div>
              <p className="title">Picster</p><br />
              <p>Picster is a responsively designed photo editing and sharing app created as a week long group project.</p><br />
              <p>As a group we worked to create a register and login page, user profiles, a photo editor for desktop and a responsive explore page with custom CSS to tile photos of different sizes.</p><br />
              <p>I worked hard on the back end, built in Python with Flask, to create a many to many relationship between users, allowing them to follow each other.</p><br />
              <p>On the front end, I </p>
            </div>
            <div className="has-text-centered">
              <a href="https://github.com/JSchenk8/project-4" target="blank"><button className="button m-2"><DiGithubBadge /></button></a>
              <a href="https://picster-gaproject.herokuapp.com/" target="blank"><button className="button m-2"><GoLink /></button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}