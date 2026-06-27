import LandingPage from './SoftwareSubComponents/LandingPage'
import Leadership from './SoftwareSubComponents/Leadership'
import Development from './SoftwareSubComponents/Development'
import BeforeTimes from './SoftwareSubComponents/BeforeTimes'
import WhatNext from './SoftwareSubComponents/WhatNext'

export default function Home(): React.JSX.Element {
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
