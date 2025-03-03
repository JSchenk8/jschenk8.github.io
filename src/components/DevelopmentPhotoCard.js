import React from 'react'
// import profilePhoto from '../images/joseph-2024.jpg'
import audioMixing from '../images/spotlight-audio.jpg'

export default function ProfileCard() {
  return (
    <section>
      <div className="development-flex-box">
        <img
          src={audioMixing}
          alt="photograph of joseph schenk mixing audio for a live stream"
          className="development-photo"
        ></img>
      </div>
    </section>
  )
}
