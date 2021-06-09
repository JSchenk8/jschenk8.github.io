import React from 'react'


import AwesomeSlider from 'react-awesome-slider'
import AwesomeSliderStyles from 'react-awesome-slider/src/styles'

import zombiesweeperHome from '../images/zombiesweeperHome.jpg'
import zombiesweeperMobile from '../images/zombiesweeperMobile.jpg'
import zombiesweeperRules from '../images/zombiesweeperRules.jpg'
import zombiesweeperLost from '../images/zombiesweeperLost.jpg'

import { DiGithubBadge } from 'react-icons/di'
import { GoLink } from 'react-icons/go'
import { IconContext } from 'react-icons/lib'

export default function ZombieSweeper() {
  return <section className="hero is-fullheight zombiesweeper-image" id="zombiesweeper">
    <div className="hero-body is-justify-content-center">
      <div className="box" id="project-box">
        <div className="columns is-desktop">
          <div className="column carouselDiv has-text-centered">
            <div className="">
              <AwesomeSlider animation="cubeAnimation" cssModule={AwesomeSliderStyles}>
                <div className="carouselItem" data-src={zombiesweeperHome} />
                <div className="carouselItem" data-src={zombiesweeperMobile} />
                <div className="carouselItem" data-src={zombiesweeperRules} />
                <div className="carouselItem" data-src={zombiesweeperLost} />
              </AwesomeSlider>
            </div>
            <div className="has-text-centered mt-6">
              <IconContext.Provider value={{ color: 'darkblue' }}>
                <a href="https://github.com/JSchenk8/GAProject-1" target="blank"><button className="button m-2 is-large"><DiGithubBadge /></button></a>
                <a href="https://jschenk8.github.io/GAProject-1/" target="blank"><button className="button m-2 is-large"><GoLink /></button></a>
              </IconContext.Provider>
              <p>Feel free to check out the code or the full site</p><br />
            </div>
          </div>
          <div className="column">
            <div>
              <p className="title">ZombieSweeper</p><br></br>
              <p>The very first project we were set at General Assembly was to build a vanilla JavaScript grid based game in one week. I chose Minesweeper as an opportunity to practice my recursive functions, knowing this would be the main challenge.</p><br />
              <p>I was able to create the basic functionality including a semi-intelligent bomb placement, which, when the player first clicked, ensured that the space they clicked would always be empty. This would then trigger the recursive function which revealed all the empty squares nearby.</p><br />
              <p>Wanting to add to the challenge, I created three levels of difficulty with different sized grids and numbers of bombs. </p><br />
              <p>I added in a local storage function to keep a user’s best time per level until their session ended. I also created modals for the rules and for when users win or lose.</p><br />
              <p>Then, I worked to create a mobile friendly version. Without the possibility to have right and left click on touch screen, I implemented mobile-only buttons which gave the user a choice between right or left click each time they touched the grid.</p><br />
              <p>Finally, I wrote CSS to style the page and chose to give it a zombie theme! So the bombs became zombies, the flags axes, and when the user loses a blood splatter appears on every dangerous square. </p><br />
              <p>This project was built in vanilla JavaScript, with HTML and CSS.</p><br />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </section>
}