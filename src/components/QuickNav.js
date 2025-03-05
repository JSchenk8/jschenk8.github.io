import React from 'react'
import profilePhoto from '../images/joseph-2024.jpg'

export default function ProfileCard(props) {
  return (
    <section>
      <div className="navigation-flex-box">
        <a href="#leadership">
          <button
            className="button m-0 is-medium is-primary"
            disabled={props.area === 'leadership' ? true : false}
          >
            Leadership
          </button>
        </a>
        <a href="#development">
          <button
            className="button m-0 is-medium is-primary"
            disabled={props.area === 'development' ? true : false}
          >
            Software Engineering
          </button>
        </a>
        <a href="#before-times">
          <button
            className="button m-0 is-medium is-primary"
            disabled={props.area === 'before-times' ? true : false}
          >
            How did I get here?
          </button>
        </a>
        <a href="#what-next">
          <button className="button m-0 is-medium is-primary">What Next?</button>
        </a>
      </div>
    </section>
  )
}
