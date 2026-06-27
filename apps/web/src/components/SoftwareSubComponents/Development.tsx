import DevelopmentTextWrapper from './DevelopmentTextWrapper'
import DevelopmentIcons from './DevelopmentIcons'
import PhotoCard from './Photocard'
export default function LandingPage(): React.JSX.Element {
  return (
    <section
      id="development"
      className="hero-body-joe"
    >
      <h1>Software Engineering</h1>
      <div className="split-cards margin-none">
        <div className="floating-card-development__half-left">
          <DevelopmentTextWrapper />
        </div>
        <div className="floating-card-development__half-right forty-width">
          <PhotoCard
            src="images/software/spotlight-audio.jpg"
            alt={'photograph of joseph schenk mixing audio for a live stream'}
            className={'development-photo'}
          />
        </div>
      </div>
      <div className="development-icons">
        <DevelopmentIcons />
      </div>
    </section>
  )
}
