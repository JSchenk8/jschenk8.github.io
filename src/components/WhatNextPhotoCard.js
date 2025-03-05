import React from 'react'
// import profilePhoto from '../images/joseph-2024.jpg'
import pointingAtHohenRausch from '../images/pointing_at_hohenrausch.jpg'

export default function ProfileCard() {
  return (
    <section>
      <div className="leadership-flex-box">
        <img
          src={pointingAtHohenRausch}
          alt="photograph of joseph schenk pointing up at a rock"
          className="leadership-photo"
        ></img>
      </div>
    </section>
  )
}
