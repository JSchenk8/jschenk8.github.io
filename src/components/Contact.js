import React from 'react'
import { useState } from 'react'
import ContactForm from './ContactForm'

import { DiGithubBadge } from 'react-icons/di'
import { HiOutlineMail } from 'react-icons/hi'
import { AiFillLinkedin } from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'




export default function Contact() {

  const [copied, updateCopied] = useState(false)

  function copyEmail() {
    navigator.clipboard.writeText('jcschenk8@gmail.com')
    updateCopied(true)
  }


  return <section className="hero is-fullheight contact-image" id="contact">
    <div className="hero-body is-justify-content-center">
      <div className="box" id="project-box">
        <div className="columns">
          <div className="column">
            <ContactForm />
          </div>
          <div className="column">
            <div>
              <p className="title">Get in touch</p><br></br>
              <p>Thanks for checking out my website!</p><br />
              <p>I would absolutely love to hear from you, please fill in the form or if you prefer, grab my email, LinkedIn or Github below!</p><br />
            </div>
            <div className="has-text-centered">
              <IconContext.Provider value={{ color: 'darkblue' }}>
                <button onClick={copyEmail} className="button m-2 is-large"><HiOutlineMail /></button>
                <a href="https://linkedin.com/in/joseph-schenk" target="blank"><button className="button m-2 is-large"><AiFillLinkedin /></button></a>
                <a href="https://github.com/JSchenk8" target="blank"><button className="button m-2 is-large"><DiGithubBadge /></button></a>
                <div>{copied && <small className="has-text-primary">Email copied to clipboard</small>}</div>
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}