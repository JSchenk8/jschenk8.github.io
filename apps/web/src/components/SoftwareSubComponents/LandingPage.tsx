import ProfileCard from './ProfileCard'
import ClickBoxes from './ClickBoxes'
import {FaArrowDown} from 'react-icons/fa'

export default function LandingPage(): React.JSX.Element {


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
      </div>
    </section>
  )
}
