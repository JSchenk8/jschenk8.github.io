import WhatNextTextCard from './WhatNextTextCard'
import PhotoCard from './Photocard'
import ClickBoxes from './ClickBoxes'
export default function LandingPage(): React.JSX.Element {
  return (
    <section
      id="what-next"
      className="hero-body-joe"
    >
      <div className="before-times-headline">
        <h1>What Next?</h1>
      </div>
      <div className="split-cards__what-next">
        <div className="floating-card-development__half-left">
          <WhatNextTextCard />
        </div>
        <div className="floating-card-development__half-right forty-width">
          <PhotoCard
            src="images/software/pointing_at_hohenrausch.webp"
            alt={'photograph of joseph schenk pointing up at a rock'}
            className=""
          />
        </div>
      </div>
      <div className="what-next-boxes">
        <ClickBoxes padding={false} />
      </div>
    </section>
  )
}