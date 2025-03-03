import React from 'react'
import profilePhoto from '../images/joseph-2024.jpg'
import LeadershipTextCard from './LeadershipTextCard'
import LeadershipAchievementsTextCard from './LeadershipAchievementsTextCard'

export default function ProfileCard() {
  return (
    <section>
      <div className="leadership-flex-box leadership-flex-wrapper">
        <LeadershipTextCard />
        <LeadershipAchievementsTextCard />
      </div>
    </section>
  )
}
