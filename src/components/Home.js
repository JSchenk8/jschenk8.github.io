import React from 'react'
import LandingPage from './LandingPage'
import Leadership from './Leadership'
import Development from './Development'
import BeforeTimes from './BeforeTimes'
import WhatNext from './WhatNext'
export default function Home() {
  return (
    <div className="home">
      <LandingPage />
      <Leadership />
      <div className="separator"></div>
      <Development />
      <div className="separator"></div>
      <BeforeTimes />
      <div className="separator"></div>
      <WhatNext />
      <div className="level"></div>
    </div>
  )
}
