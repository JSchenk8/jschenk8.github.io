import React from 'react'
import Skills from './Skills'
import headshot from '../images/headshot.jpg'




export default function AboutMe() {
  return <section className="hero is-fullheight about-image" id="about">
    <div className="hero-body">
      <div className="container has-text-centered box" id="about-box">
        <div>
          <div>
            <img id="profile" src={headshot}></img>
          </div>
        </div>

        <div className="columns is-desktop">
          <div className="column has-text-left">

            <p className="subtitle has-text-centered">About Me</p>
            <p className="mt-6">
              I am a junior software engineer with business experience and a first class honours degree in mechanical engineering. Alongside my degree, I continued to run my own successful photography business and technical advice service in the climbing industry.
            </p><br />
            <p>
              At university, I trained in Matlab and completed a thesis on the use of Software for Computer Vision. I decided to pursue a career in Software Engineering and enrolled in an immersive course at General Assembly.
            </p><br />
            <p>
              Trained in multiple coding languages and best practices I am looking to gain a role as a full stack developer. I am hard working, a quick learner and a great team player. I look forward to growing my experience and technical skills within a fast-paced environment.
            </p><br />
            <p>Since finishing the course I have built an e-commerce website for Rigaud Candles, which you can see <a href="#rigaud">below.</a> I am now working on some exciting side projects including a Python facial recognition program built on a Raspberry Pi and two data visualisation tools, which I hope to add to this portfolio soon.</p><br />
            <p>Outside of coding I love climbing, travelling by motorcycle and getting out with my camera. All the photos you see here on my website were taken by me, and if you want to see my photography website please have a look <a href="https://www.josephschenkphotography.com" target="blank">here!</a></p>
            <br />
            <p>If you would like to get in touch, please <a href="#contact">contact me</a> below</p><br /></div>
          <div className="column">
            <Skills />
          </div>
        </div>
      </div>
    </div>
  </section >
}