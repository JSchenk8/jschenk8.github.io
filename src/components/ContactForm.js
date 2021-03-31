import React from 'react'
import { useState } from 'react'
import emailjs from 'emailjs-com'
import SyncLoader from "react-spinners/SyncLoader"
import { css } from "@emotion/core"

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  `

export default function ContactForm() {
  const [emailData, updateEmailData] = useState({
    firstname: '',
    lastname: '',
    subject: '',
    text: '',
    email: ''
  })

  const [emailErrors, updateEmailErrors] = useState({
    name: '',
    subject: '',
    text: '',
    email: ''
  })

  const [sendSuccess, updateSendSuccess] = useState(false)

  const [loading, setLoading] = useState(false)
  

  function handleChange(event) {
    const { name, value } = event.target
    updateEmailData({ ...emailData, [name]: value })
    updateEmailErrors({ ...emailErrors, [name]: '' })
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!emailData.email || !emailData.email.includes('@')) {
      updateEmailErrors({ ...emailErrors, email: 'Please enter a valid email address' })
      return
    } else if (!emailData.subject) {
      updateEmailErrors({ ...emailErrors, subject: 'Please give your message a subject' })
      return
    } else if (!emailData.text) {
      updateEmailErrors({ ...emailErrors, text: 'Please give your message some text' })
      return
    } else if (!emailData.firstname || !emailData.lastname) {
      updateEmailErrors({ ...emailErrors, name: 'Please provide your full name' })
      return
    }
    setLoading(true)
    emailjs.send(process.env.SERVICEID, process.env.FORMID, emailData, process.env.USERID)
      .then(function () {
        updateSendSuccess(true)
        updateEmailData({
          firstname: '',
          lastname: '',
          subject: '',
          text: '',
          email: ''
        })
        setLoading(false)
      }, function (error) {
        console.log('Error: ', error)
      })
  }


  return <div>
    <form>
      <div className="field">
        <label className="labels">First Name *</label>
        <div className="control  mb-2 mt-2">
          <input className="input"
            type="text"
            value={emailData.firstname}
            onChange={handleChange}
            name={'firstname'} />
        </div>
      </div>
      <div className="field">
        <label className="labels">Last Name *</label>
        <div className="control  mb-2 mt-2">
          <input className="input"
            type="text"
            value={emailData.lastname}
            onChange={handleChange}
            name={'lastname'} />
          {emailErrors && <small className="has-text-primary">{emailErrors.name}</small>}
        </div>
      </div>
      <div className="field">
        <label className="labels">Email *</label>
        <div className="control  mb-2 mt-2">
          <input className="input"
            type="text"
            value={emailData.email}
            onChange={handleChange}
            name={'email'} />
          {emailErrors && <small className="has-text-primary">{emailErrors.email}</small>}
        </div>
      </div>
      <div className="field">
        <label className="labels">Subject *</label>
        <div className="control  mb-2 mt-2">
          <input className="input"
            type="text"
            value={emailData.subject}
            onChange={handleChange}
            name={'subject'} />
          {emailErrors && <small className="has-text-primary">{emailErrors.subject}</small>}
        </div>
      </div>
      <div className="field">
        <label className="labels">Message *</label>
        <div className="control  mb-2 mt-2">
          <textarea className="textarea"
            type="text"
            value={emailData.text}
            onChange={handleChange}
            name={'text'} />
          {emailErrors && <small className="has-text-primary">{emailErrors.text}</small>}
        </div>
      </div>
      <div>
        <button type="submit" onClick={handleSubmit} className="button mt-2 mr-2 mb-2">Submit</button>
      </div>
      <div><SyncLoader color={'darkblue'} loading={loading} css={override} /></div>
      <div>
        {sendSuccess && <small className="has-text-primary">Thank you for your email, I will be in touch soon</small>}
      </div>
    </form>
  </div>
}