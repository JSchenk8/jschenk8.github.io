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

  return <section>
    <section className="landing-page">
    <section className="home-page-box full-page-hero">
      <div className="">
      <div className="profile-flex-box">
        <div className="profile-text">
        <h1>Joseph Schenk</h1>
        <h3>Leader, Software Engineer, Consultant, Communicator</h3>
        </div>
        <img src={profilePhoto} alt="photograph of joseph schenk" className="profile-photo"></img>
    </div>
      <div className="icon-flex-box">
      <div className="profile-icons">
              <IconContext.Provider value={{ color: 'black' }}>
                <button onClick={copyEmail} className="button m-0 is-medium is-primary"><HiOutlineMail /></button>
                <a href="https://www.linkedin.com/in/joseph-schenk/" target="blank"><button className="button m-0 is-medium is-primary"><FaLinkedin /></button></a>
              </IconContext.Provider>
      </div>
      <div>{copied && <small className="copied-text">Email copied to clipboard</small>}</div>

      </div>
      </div>


      {/* second page */}
      <div className="first-page">
      <div>Hello world</div>
      <div className="home-page-box">
      <div className="profile-flex-box">
        <div className="profile-text">
        <h1>Joseph Schenk</h1>
        <h3>Leader, Software Engineer, Consultant, Communicator</h3>
        </div>
        <img src={profilePhoto} alt="photograph of joseph schenk" className="profile-photo"></img>
    </div>
      <div className="icon-flex-box">
      <div className="profile-icons">
              <IconContext.Provider value={{ color: 'black' }}>
                <button onClick={copyEmail} className="button m-0 is-medium is-primary"><HiOutlineMail /></button>
                <a href="https://www.linkedin.com/in/joseph-schenk/" target="blank"><button className="button m-0 is-medium is-primary"><FaLinkedin /></button></a>
              </IconContext.Provider>
      </div>
      <div>{copied && <small className="copied-text">Email copied to clipboard</small>}</div>

      </div>
      </div>
      </div>

    </section>

    {/* <FaAngleDown className="scroll-icon" /> */}
  </section>
  </section>
}