import React from 'react'
// import profilePhoto from '../images/joseph-2024.jpg'
import highball from '../images/highball.JPG'
import hohenrausch from '../images/hohenrausch.JPG'
import routsetting from '../images/routesetting.jpg'
// import valaisClimbing from '../images/valais-climbing.jpg'
import bananaFingers from '../images/bananaFingers.jpg'

export default function ProfileCard() {
  return (
    <section>
      <div className="development-flex-box">
        <div className="before-times-photo-grid">
          <img
            src={highball}
            alt="photograph of joseph schenk climbing a tall boulder outdoors"
            className="before-times-photo__top-left"
          ></img>
          <img
            src={hohenrausch}
            alt="photograph of joseph schenk climbing a hard boulder outdoors"
            className="before-times-photo__top-right"
          ></img>
          <img
            src={routsetting}
            alt="photograph of joseph schenk leading another person in setting indoor climbing routes"
            className="before-times-photo__bottom-left"
          ></img>
          <img
            src={bananaFingers}
            alt="photograph taken by joseph schenk of two climbers in the mountains"
            className="before-times-photo__bottom-right"
          ></img>
        </div>
      </div>
    </section>
  )
}
