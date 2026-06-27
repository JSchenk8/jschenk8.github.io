import {useState} from 'react'
import {HiOutlineMail} from 'react-icons/hi'
import {IconContext} from 'react-icons/lib'
import {FaLinkedin} from 'react-icons/fa'
import {FaFileDownload} from 'react-icons/fa'


export default function ClickBoxes(props: { padding: boolean }): React.JSX.Element {
  const [copied, updateCopied] = useState(false)
  function copyEmail(): void {
    navigator.clipboard.writeText('hello@josephschenk.com')
    updateCopied(true)
  }

  return (
    <section>
      <div className={`profile-icons profile-icons__${props.padding ? 'padding' : ''}`}>
        <IconContext.Provider value={{color: 'black'}}>
          <button
            onClick={copyEmail}
            className="button m-0 is-medium is-primary"
          >
            <HiOutlineMail />
          </button>
          <a
            href="https://www.linkedin.com/in/joseph-schenk/"
            target="_blank"
          >
            <button className="button m-0 is-medium is-primary">
              <FaLinkedin />
            </button>
          </a>
          <a
            target="_blank"
            href={`${import.meta.env.BASE_URL}files/schenk_cv.pdf`}
            rel="noopener noreferrer"
          >
            <button className="button m-0 is-medium is-primary cv-button">
              <FaFileDownload />
              <span className="cv-label">CV</span>
            </button>
          </a>
        </IconContext.Provider>
      </div>
      <div>{copied && <small className="copied-text">Email copied to clipboard</small>}</div>
    </section>
  )
}
