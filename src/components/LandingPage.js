import React from 'react'
import ProfileCard from './ProfileCard'
import ClickBoxes from './ClickBoxes'
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
        {/* <div className="quick-nav">
          <QuickNav area={'intro'} />
        </div> */}
      </div>
    </section>
  )
}
