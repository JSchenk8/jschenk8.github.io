import React from 'react'
import profilePhoto from '../images/joseph-2024.jpg'

export default function ProfileCard() {
  return (
    <section>
      <div className="leadership-flex-box">
        {/* <img src={profilePhoto} alt="photograph of joseph schenk" className="profile-photo"></img>
         */}
        <h1>Leadership</h1>
        <p className="top-margin-20">
          I believe leadership is about enabling individuals to play to their strengths. This way,
          the team itself plays as a whole to its strength.
        </p>
        <p className="top-margin-20">
          When individuals are encouraged to flourish and to focus on what they love they do their
          best work. Finding space for team members to explore their best selves whilst supporting
          each other <br />
          is what drives me in my daily work as a department head.
        </p>
        <p className="top-margin-20">
          In the same breath, playing to my strengths in alleviating pressure from team members on a
          strategic, contractual, account management and technical level <br />
          gives each team member space to grow in an environment without excessive pressure and with
          high level support to have confidence to learn.
        </p>
      </div>
    </section>
  )
}
