export default function ProfileCard(): React.JSX.Element {
  return (
    <section>
      <div className="development-flex-box">
        <div className="before-times-photo-grid">
          <img
            src="/images/software/highball.JPG"
            alt="photograph of joseph schenk climbing a tall boulder outdoors"
            className="before-times-photo__top-left"
          ></img>
          <img
            src="/images/software/hohenrausch.JPG"
            alt="photograph of joseph schenk climbing a hard boulder outdoors"
            className="before-times-photo__top-right"
          ></img>
          <img
            src="/images/software/routesetting.jpg"
            alt="photograph of joseph schenk leading another person in setting indoor climbing routes"
            className="before-times-photo__bottom-left"
          ></img>
          <img
            src="/images/software/bananaFingers.jpg"
            alt="photograph taken by joseph schenk of two climbers in the mountains"
            className="before-times-photo__bottom-right"
          ></img>
        </div>
      </div>
    </section>
  )
}
