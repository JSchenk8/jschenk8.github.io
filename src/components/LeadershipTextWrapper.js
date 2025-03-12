import React from 'react'
import profilePhoto from '../images/joseph-2024.jpg'
import LeadershipTextCard from './LeadershipTextCard'
import LeadershipAchievementsTextCard from './LeadershipAchievementsTextCard'
import {FaArrowDown} from 'react-icons/fa'

export default function ProfileCard() {
  return (
    <section>
      <div className="leadership-flex-box leadership-flex-wrapper">
        <LeadershipTextCard />
        <LeadershipAchievementsTextCard />
      </div>
      <div className="scroll-icon">
        <FaArrowDown />
      </div>
    </section>
  )
}
