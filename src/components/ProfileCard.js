import React from 'react'
import profilePhoto from '../images/joseph-2024.jpg'

export default function ProfileCard() {
  return (
    <section>
      <div className="profile-flex-box">
        <div className="profile-text">
          <h1>Joseph Schenk</h1>
          <h3>Leader, Software Engineer, Consultant, Communicator</h3>
          <p className="margin-top-20">
            I lead teams, build processes and solve problems by designing and implementing software
            solutions
          </p>
          <p className="margin-top-20">
            Read on to learn how I got here and what I could do for you...
          </p>
        </div>
        <img
          src={profilePhoto}
          alt="photograph of joseph schenk"
          className="profile-photo"
        ></img>
      </div>
    </section>
  )
}
