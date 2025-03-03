import React from 'react'
import ProfileCard from './ProfileCard'
import ClickBoxes from './ClickBoxes'
import LeadershipTextWrapper from './LeadershipTextWrapper'
import LeadershipPhotoCard from './LeadershipPhotoCard'
import DevelopmentPhotoCard from './DevelopmentPhotoCard'
import DevelopmentTextWrapper from './DevelopmentTextWrapper'
import {FaArrowDown} from 'react-icons/fa'

export default function LandingPage() {
  console.log(ClickBoxes)

  return (
    <section className="landing-page">
      <div className="hero-body-joe">
        <div className="floating-card">
          <ProfileCard />
          <ClickBoxes />
        </div>
        <div className="scroll-icon">
          <FaArrowDown />
        </div>
      </div>

      <div className="hero-body-joe">
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
      </div>

      <div className="hero-body-joe">
        <div className="split-cards">
          <div className="floating-card-development__half-left">
            <DevelopmentTextWrapper />
          </div>
          <div className="floating-card-development__half-right forty-width">
            <DevelopmentPhotoCard />
          </div>
        </div>
        <div className="scroll-icon">
          <FaArrowDown />
        </div>
      </div>
    </section>
  )
}
