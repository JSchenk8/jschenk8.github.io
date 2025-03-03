import React from 'react'
import profilePhoto from '../images/joseph-2024.jpg'
import LeadershipTextCard from './LeadershipTextCard'
import LeadershipAchievementsTextCard from './LeadershipAchievementsTextCard'
import DevelopmentTextCard from './DevelopmentTextCard'

export default function ProfileCard() {
  return (
    <section>
      <div className="leadership-flex-box leadership-flex-wrapper">
        <DevelopmentTextCard />
      </div>
    </section>
  )
}
