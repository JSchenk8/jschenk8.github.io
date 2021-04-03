import React from 'react'
import scroll from '../images/scroll.png'
import Navbar from './Navbar'

export default function LandingPage() {
  return <section className="hero is-fullheight landing-image">
    <Navbar />
    <div className="hero-body">
      <div className="container has-text-centered">
        <p className="title has-text-white is-size-1">Joseph Schenk</p>
        <p className="subtitle has-text-white is-size-4">Software Engineer</p>

      </div>
    </div>
    <div className="hero-foot has-text-centered">
      <img className="fade" id="scroll" src={scroll}></img>
    </div>
  </section>
}