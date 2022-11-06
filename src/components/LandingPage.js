import React from 'react'
import { useState } from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { IconContext } from 'react-icons/lib'
import { AiOutlineInstagram } from 'react-icons/ai'

export default function LandingPage() {
  const [copied, updateCopied] = useState(false)
  function copyEmail() {
    navigator.clipboard.writeText('jcschenk8@gmail.com')
    updateCopied(true)
  }

  return <section className="hero is-fullheight landing-image">
    <div className="hero-body is-flex-direction-column"  id="modal-background">
      <div className="container has-text-centered is-flex is-flex-direction-column is-justify-content-center">
        <p className="title has-text-white is-size-1">Joseph Schenk Photography</p>
        <p className="subtitle has-text-white is-size-4">Coming soon...</p>
      </div>
      <div className="has-text-centered">
              <IconContext.Provider value={{ color: 'white' }}>
                <button onClick={copyEmail} className="button m-0 is-medium is-primary"><HiOutlineMail /></button>
                <a href="https://www.instagram.com/josephschenk_photography/" target="blank"><button className="button m-0 is-medium is-primary"><AiOutlineInstagram /></button></a>
                <div>{!copied && <small className="text-holder">Email copied to clipboard</small>}</div>
                <div>{copied && <small className="has-text-white">Email copied to clipboard</small>}</div>
              </IconContext.Provider>
            </div>

    </div>
  </section>
}