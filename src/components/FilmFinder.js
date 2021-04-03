import React from 'react'

import AwesomeSlider from 'react-awesome-slider'
import AwesomeSliderStyles from 'react-awesome-slider/src/styles'

import filmfinderHome from '../images/filmfinderHome.png'
import filmfinderSearch from '../images/filmfinderSearch.png'
import filmfinderResult from '../images/filmfinderResult.png'
import filmfinderSimilar from '../images/filmfinderSimilar.png'

import { DiGithubBadge } from 'react-icons/di'
import { GoLink } from 'react-icons/go'
import { IconContext } from 'react-icons/lib'

export default function FilmFinder() {
  return <section className="hero is-fullheight filmfinder-image" id="filmfinder">
    <div className="hero-body is-justify-content-center">
      <div className="box" id="project-box">
        <div className="columns is-desktop">
          <div className="column carouselDiv has-text-centered">
            <div className="">
              <AwesomeSlider animation="cubeAnimation" cssModule={AwesomeSliderStyles}>
                <div className="carouselItem" data-src={filmfinderHome} />
                <div className="carouselItem" data-src={filmfinderSearch} />
                <div className="carouselItem" data-src={filmfinderResult} />
                <div className="carouselItem" data-src={filmfinderSimilar} />
              </AwesomeSlider>
            </div>
          </div>
          <div className="column">
            <div>
              <p className="title">Film Finder</p><br></br>
              <p>Film finder was the result of a 48 hour pair-programming hackathon and my first real foray into React.</p><br />
              <p>Tasked with creating a react app integrating at least one third party API, my colleague and I chose to use the MovieDB API to create a movie search engine. Wanting to add to the user experience, we then integrated the New York Times Review API so that any films with a valid review would show users the review, and give them the option of navigating to the NYT website.</p><br />
              <p>The website is based mostly around our search engine, which offers users the change to search by movie title or actor. Results are then shown and when an individual movie is chosen, users are also given a choice of twenty similar titles.</p><br />
              <p>We used the project as an opportunity to practice some CSS animations, so the home page has a dynamic appearance and when searching through movies each movie grows when hovered over. </p><br />
              <p>You can try the website below, or click onto my Github for the code and a readme.</p><br />
            </div>
            <div className="has-text-centered">
              <IconContext.Provider value={{ color: 'darkblue' }}>
                <a href="https://github.com/JSchenk8/project-2" target="blank"><button className="button m-2 is-large"><DiGithubBadge /></button></a>
                <a href="https://jschenk8.github.io/project-2/" target="blank"><button className="button m-2 is-large"><GoLink /></button></a>
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}