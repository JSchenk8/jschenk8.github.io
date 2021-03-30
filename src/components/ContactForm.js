import React from 'react'
import { useState } from 'react'

export default function ContactForm() {
  const [emailData, updateEmailData] = useState({
    from: '',
    to: 'jcschenk8@gmailcom',
    subject: '',
    text: ''
  })

  const [emailErrors, updateEmailErrors] = useState({
    from: '',
    to: 'jcschenk8@gmailcom',
    subject: '',
    text: ''
  })

  const [sendSuccess, updateSendSuccess] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    updateEmailData({ ...emailData, [name]: value })
    updateEmailErrors({ ...emailErrors, [name]: '' })
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!emailData.from || !emailData.from.includes('@')) {
      updateEmailErrors({ ...emailErrors, from: 'Please enter a valid email address' })
      return
    } else if (!emailData.subject) {
      updateEmailErrors({ ...emailErrors, subject: 'Please give your message a subject' })
      return
    } else if (!emailData.text) {
      updateEmailErrors({ ...emailErrors, text: 'Please give your message some text' })
      return
    }
    updateSendSuccess(true)
  }

  return <div>
    <div className="field">
      <label className="labels">Email *</label>
      <div className="control  mb-2 mt-2">
        <input className="input"
          type="text"
          value={emailData.from}
          onChange={handleChange}
          name={'from'} />
        {emailErrors && <small className="has-text-primary">{emailErrors.from}</small>}
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
      <label className="labels">Subject *</label>
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
      <button onClick={handleSubmit} className="button m-2">Submit</button>
    </div>
    <div>
      {sendSuccess && <small className="has-text-primary">Thank you for your email, I will be in touch soon</small>}
    </div>
  </div>
}