import React from 'react'
import {useState} from 'react'
import {HiOutlineMail} from 'react-icons/hi'
import {IconContext} from 'react-icons/lib'
import {FaLinkedin} from 'react-icons/fa'
import {FaFileDownload} from 'react-icons/fa'

export default function ClickBoxes(props) {
  console.log(props)
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
            href="https://js-cv-25.ezihost.net"
            target="_blank"
          >
            <button className="button m-0 is-medium is-primary">
              <FaFileDownload />
            </button>
          </a>
        </IconContext.Provider>
      </div>
      <div>{copied && <small className="copied-text">Email copied to clipboard</small>}</div>
    </section>
  )
}
