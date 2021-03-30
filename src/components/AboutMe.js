import React from 'react'
import Skills from './Skills'
import headshot from '../images/headshot.jpg'
import 'pure-react-carousel/dist/react-carousel.es.css'



export default function AboutMe() {
  return <section className="hero is-fullheight about-image" id="about">
    <div className="hero-body">
      <div className="container has-text-centered box" id="about-box">
        <div>
          <div>
            <img id="profile" src={headshot}></img>
          </div>
        </div>

        <div className="columns">
          <div className="column">

            <p className="sub-title">About Me</p><br></br>
            <p>
              I am a junior software engineer with business experience and a first class honours degree in mechanical engineering. Alongside my degree, I continued to run my own successful photography business and technical advice service in the climbing industry.
            </p><br></br>
            <p>
              At university, I trained in Matlab and completed a thesis on the use of Software for Computer Vision. I decided to pursue a career in Software Engineering and enrolled in an immersive course at General Assembly.
            </p><br></br>
            <p>
              Trained in multiple coding languages and best practices I am looking to gain a role as a full stack developer. I am hard working, a quick learner and a great team player. I look forward to growing my experience and technical skills within a fast-paced environment.
            </p><br></br>
            <p>Outside of coding I maintain my skills as a professional photographer and enjoy going climbing and motorcycling</p>
            <br></br>
            <p>If you would like to get in touch, please <a href="#contact">contact me</a> below</p><br></br></div>
          <div className="column">
            <Skills />
          </div>
        </div>
      </div>
    </div>
  </section >
}