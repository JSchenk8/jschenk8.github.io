import React from 'react'
import ProfileCard from './ProfileCard'
import ClickBoxes from './ClickBoxes'
import LeadershipTextWrapper from './LeadershipTextWrapper'
import LeadershipPhotoCard from './LeadershipPhotoCard'
import DevelopmentPhotoCard from './DevelopmentPhotoCard'
import DevelopmentTextWrapper from './DevelopmentTextWrapper'
import DevelopmentIcons from './DevelopmentIcons'
import BeforeTimesPhotoCard from './BeforeTimesPhotoCard'
import BeforeTimesTextCard from './BeforeTimesTextCard'
import WhatNextPhotoCard from './WhatNextPhotoCard'
import WhatNextTextCard from './WhatNextTextCard'
import QuickNav from './QuickNav'
import {FaArrowDown} from 'react-icons/fa'

export default function LandingPage() {
  console.log(ClickBoxes)

  return (
    <section className="landing-page">
      <div className="hero-body-joe">
        <div className="floating-card">
          <ProfileCard />
          <ClickBoxes padding={true} />
        </div>
        <div className="scroll-icon">
          <FaArrowDown />
        </div>
        <div className="quick-nav">
          <QuickNav area={'intro'} />
        </div>
      </div>

      <div
        id="leadership"
        className="hero-body-joe"
      >
        <div className="split-cards">
          <div className="floating-card-leadership__half-left forty-width">
            <LeadershipPhotoCard />
          </div>
          <div className="floating-card-leadership__half-right">
            <LeadershipTextWrapper />
          </div>
        </div>
        <div className="scroll-icon">
          <FaArrowDown />
        </div>
        <div className="quick-nav">
          <QuickNav area={'leadership'} />
        </div>
      </div>

      <div
        id="development"
        className="hero-body-joe"
      >
        <div className="split-cards">
          <div className="floating-card-development__half-left">
            <DevelopmentTextWrapper />
          </div>
          <div className="floating-card-development__half-right forty-width">
            <DevelopmentPhotoCard />
          </div>
        </div>
        <div className="development-icons">
          <DevelopmentIcons />
        </div>
        <div className="scroll-icon">
          <FaArrowDown />
        </div>
        <div className="quick-nav">
          <QuickNav area={'development'} />
        </div>
      </div>
      <div
        id="before-times"
        className="hero-body-joe"
      >
        <div className="before-times-headline">
          <h1>So how did I end up here?</h1>
        </div>
        <div className="split-cards__before-times">
          <div className="floating-card-before-times__half-left">
            <BeforeTimesPhotoCard />
          </div>
          <div className="floating-card-before-times__half-right">
            <BeforeTimesTextCard />
          </div>
        </div>
        <div className="scroll-icon">
          <FaArrowDown />
        </div>
        <div className="quick-nav">
          <QuickNav area={'before-times'} />
        </div>
      </div>
      <div
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
            <WhatNextPhotoCard />
          </div>
        </div>
        <div className="what-next-boxes">
          <ClickBoxes padding={false} />
        </div>
      </div>
    </section>
  )
}
