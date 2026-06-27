import BeforeTimesPhotoCard from './BeforeTimesPhotoCard'
import BeforeTimesTextCard from './BeforeTimesTextCard'
import SoftwareTextCard from './SoftwareTextCard'
// import profilePhoto from '../images/joseph-2024.jpg'
export default function LandingPage(): React.JSX.Element {
  return (
    <section
      id="before-times"
      className="hero-body-joe"
    >
      <div className="before-times-headline">
        <h1>So how did I end up here?</h1>
      </div>
      <div className="split-cards__before-times">
        <div className="floating-card-before-times__half-left">
          <BeforeTimesPhotoCard />
        </div>
        <div className="floating-card-before-times__half-right">
          <BeforeTimesTextCard />
        </div>
      </div>
      <SoftwareTextCard />
    </section>
  )
}
