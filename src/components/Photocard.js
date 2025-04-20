import React from 'react'

export default function PhotoCard(props) {
  console.log(props)

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
