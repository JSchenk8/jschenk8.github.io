import React from 'react'
import profilePhoto from '../images/joseph-2024.jpg'

export default function ProfileCard() {
  return (
    <section>
      <div className="profile-flex-box">
        <div className="profile-text">
          <h1>Joseph Schenk</h1>
          <h3>Generalist, Problem solver, Communicator, Software Engineer</h3>
          <p className="margin-top-20">
            I lead teams, build processes and solve problems by designing and implementing software
            solutions
          </p>
          <p className="margin-top-20">
            With an experience in Software and Solutions engineering and a background in performance
            coaching, read on to learn how I got here and what I could do for you.
          </p>
        </div>
        <img
          src={profilePhoto}
          alt="portrait photograph of joseph schenk in a blue shirt in front of a grafiti wall"
          className="profile-photo"
        ></img>
      </div>
    </section>
  )
}
