export default function PhotoCard(props: { src: string; alt: string; className: string }): React.JSX.Element {
  return (
    <section>
      <div className="leadership-flex-box">
        <img
          src={props.src}
          alt={props.alt}
          className={props.className}
        ></img>
      </div>
    </section>
  )
}
