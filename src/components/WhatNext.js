import React from 'react'
import WhatNextTextCard from './WhatNextTextCard'
import PhotoCard from './Photocard'
import ClickBoxes from './ClickBoxes'
import pointingAtHohenRausch from '../images/pointing_at_hohenrausch.jpg'
// import profilePhoto from '../images/joseph-2024.jpg'
export default function LandingPage() {
  return (
    <section
      id="what-next"
      className="hero-body-joe"
    >
      <div className="before-times-headline">
        <h1>What Next?</h1>
      </div>
      <div className="split-cards__what-next">
        <div className="floating-card-development__half-left">
          <WhatNextTextCard />
        </div>
        <div className="floating-card-development__half-right forty-width">
          <PhotoCard
            src={pointingAtHohenRausch}
            alt={'photograph of joseph schenk pointing up at a rock'}
          />
        </div>
      </div>
      <div className="what-next-boxes">
        <ClickBoxes padding={false} />
      </div>
    </section>
  )
}
