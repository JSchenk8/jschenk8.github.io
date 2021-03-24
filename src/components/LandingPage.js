import React from 'react'
import scroll from '../images/scroll.png'
import Navbar from './Navbar'

export default function LandingPage() {
  return <section className="hero is-fullheight landing-image">
    <Navbar />
    <div className="hero-body">
      <div className="container has-text-centered">
        <p className="title">Joseph Schenk</p>
        <p className="subTitle">Software Engineer</p>

      </div>
    </div>
    <div className="hero-foot has-text-centered">
      <img id="scroll" src={scroll}></img>
    </div>
  </section>
}