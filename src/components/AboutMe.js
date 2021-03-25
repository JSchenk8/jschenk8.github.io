import React from 'react'
import Skills from './Skills'
import headshot from '../images/headshot.jpg'


import AwesomeSlider from 'react-awesome-slider'
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';

export default function AboutMe() {
  return <section className="hero is-fullheight" id="about">
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="columns">

          <div className="column">
            <p>
              Brand Statement Here
            </p>
          </div>
          <div className="column">
            <div className="box">
              <img id="profile" src={headshot}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <Skills />
  </section>
}