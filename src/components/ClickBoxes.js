import React from 'react'
import {useState} from 'react'
import {HiOutlineMail} from 'react-icons/hi'
import {IconContext} from 'react-icons/lib'
import {FaLinkedin} from 'react-icons/fa'
import {FaFileDownload} from 'react-icons/fa'

// import cv2025 from '../files/CV2025.pdf'

export default function ClickBoxes(props) {
  const [copied, updateCopied] = useState(false)
  function copyEmail() {
    navigator.clipboard.writeText('jcschenk8@gmail.com')
    updateCopied(true)
  }

  return (
    <section>
      <div className={`profile-icons__${props.padding ? 'padding' : ''}`}>
        <IconContext.Provider value={{color: 'black'}}>
          <button
            onClick={copyEmail}
            className="button m-0 is-medium is-primary"
          >
            <HiOutlineMail />
          </button>
          <a
            href="https://www.linkedin.com/in/joseph-schenk/"
            target="blank"
          >
            <button className="button m-0 is-medium is-primary">
              <FaLinkedin />
            </button>
          </a>
          <a
            target="_blank"
            href="../CV2025.pdf"
          >
            <button className="button m-0 is-medium is-primary">
              <FaFileDownload />
              <h3 className="cv-label">CV</h3>
            </button>
          </a>
        </IconContext.Provider>
      </div>
      <div>{copied && <small className="copied-text">Email copied to clipboard</small>}</div>
    </section>
  )
}
