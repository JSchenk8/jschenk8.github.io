import React from 'react'
import { useState } from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { IconContext } from 'react-icons/lib'
import { AiOutlineInstagram } from 'react-icons/ai'
import profilePhoto from '../images/joseph-2024.jpg'
import { FaAngleDown } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function LandingPage() {
  const [copied, updateCopied] = useState(false)
  function copyEmail() {
    navigator.clipboard.writeText('jcschenk8@gmail.com')
    updateCopied(true)
  }

  return <section className="landing-page">
    <div className="home-page-box">
      <div className="profile-flex-box">
        <div className="profile-text">
        <h1>Joseph Schenk</h1>
        <h3>Leader, Software Engineer, Consultant, Communicator</h3>
        </div>
        <img src={profilePhoto} alt="photograph of joseph schenk" className="profile-photo"></img>
    </div>

    {/* <div className="hero-body is-flex-direction-column"  id="modal-background"> */}
      {/* <div className="container has-text-centered is-flex is-flex-direction-column is-justify-content-center"> */}
        {/* <p className="title has-text-white is-size-1">Joseph Schenk Photography</p> */}
        {/* <p className="subtitle has-text-white is-size-4">Coming soon...</p> */}
      {/* </div> */}
      <div className="icon-flex-box">
      <div className="profile-icons">
              <IconContext.Provider value={{ color: 'black' }}>
                <button onClick={copyEmail} className="button m-0 is-medium is-primary"><HiOutlineMail /></button>
                <a href="https://www.linkedin.com/in/joseph-schenk/" target="blank"><button className="button m-0 is-medium is-primary"><FaLinkedin /></button></a>
              </IconContext.Provider>
      </div>
      <div>{copied && <small className="copied-text">Email copied to clipboard</small>}</div>

      </div>
      {/* <div>Scroll to enter</div> */}

    {/* </div> */}
    </div>
    {/* <FaAngleDown className="scroll-icon" /> */}
  </section>
}