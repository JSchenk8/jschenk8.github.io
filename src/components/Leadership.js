import React from 'react'
import LeadershipTextWrapper from './LeadershipTextWrapper'
import LeadershipPhotoCard from './LeadershipPhotoCard'
import PhotoCard from './Photocard'
import presenting from '../images/presenting.jpg'
import {FaArrowDown} from 'react-icons/fa'
import LeadershipTextCard from './LeadershipTextCard'
import LeadershipAchievementsTextCard from './LeadershipAchievementsTextCard'

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="hero-body-joe"
    >
      <h1 className="margin-top-50">Leadership</h1>
      <div className="split-cards margin-none">
        <div className="floating-card-leadership__half-left forty-width">
          <PhotoCard
            src={presenting}
            alt={'photograph of joseph schenk presenting an idea'}
            className={'leadership-photo'}
          />
        </div>
        <div className="floating-card-leadership__half-right">
          <div className="leadership-flex-box leadership-flex-wrapper">
            <LeadershipTextCard />
          </div>
          <div className="scroll-icon">
            <FaArrowDown />
          </div>
        </div>
      </div>
      <div className="leadership-flex-box leadership-flex-wrapper">
        <LeadershipAchievementsTextCard />
      </div>
    </section>
  )
}
