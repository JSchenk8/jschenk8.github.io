import React from 'react'

import AwesomeSlider from 'react-awesome-slider'
import AwesomeSliderStyles from 'react-awesome-slider/src/styles'

import { DiGithubBadge } from 'react-icons/di'
import { GoLink } from 'react-icons/go'

export default function FilmFinder() {
  return <section className="hero is-fullheight filmfinder-image" id="filmfinder">
    <div className="hero-body is-justify-content-center">
      <div className="box">
        <div className="columns">
          <div className="column carouselDiv has-text-centered">
            <div className="">
              <AwesomeSlider animation="cubeAnimation" cssModule={AwesomeSliderStyles}>
                <div className="carouselItem" data-src="../images/filmfinderHome.png" />
                <div className="carouselItem" data-src="../images/filmfinderSearch.png" />
                <div className="carouselItem" data-src="../images/filmfinderResult.png" />
                <div className="carouselItem" data-src="../images/filmfinderSimilar.png" />
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
              <a href="https://github.com/JSchenk8/project-2" target="blank"><button className="button m-2"><DiGithubBadge /></button></a>
              <a href="https://jschenk8.github.io/project-2/" target="blank"><button className="button m-2"><GoLink /></button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}