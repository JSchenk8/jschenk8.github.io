import React from 'react'


import AwesomeSlider from 'react-awesome-slider'
import AwesomeSliderStyles from 'react-awesome-slider/src/styles'

import { DiGithubBadge } from 'react-icons/di'
import { GoLink } from 'react-icons/go'

export default function ZombieSweeper() {
  return <section className="hero is-fullheight zombiesweeper-image" id="zombiesweeper">
    <div className="hero-body is-justify-content-center">
      <div className="box">
        <div className="columns">
          <div className="column carouselDiv has-text-centered">
            <div className="">
              <AwesomeSlider animation="cubeAnimation" cssModule={AwesomeSliderStyles}>
                <div className="carouselItem" data-src="../images/zombiesweeperHome.png" />
                <div className="carouselItem" data-src="../images/zombiesweeperMobile.png" />
                <div className="carouselItem" data-src="../images/zombiesweeperRules.png" />
                <div className="carouselItem" data-src="../images/zombiesweeperLost.png" />
              </AwesomeSlider>
            </div>
          </div>
          <div className="column">
            <div>
              <p className="title">Film Finder</p><br></br>
              <p>Park Pong was a week long project built in the Mern Stack. If we keep adding content to this paragraph what happens</p>
            </div>
            <div className="has-text-centered">
              <a href="https://github.com/JSchenk8/GAProject-1" target="blank"><button className="button m-2"><DiGithubBadge /></button></a>
              <a href="https://jschenk8.github.io/GAProject-1/" target="blank"><button className="button m-2"><GoLink /></button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}