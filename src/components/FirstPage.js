import React from 'react'
import {useState} from 'react'
import {HiOutlineMail} from 'react-icons/hi'
import {IconContext} from 'react-icons/lib'
import {AiOutlineInstagram} from 'react-icons/ai'
import profilePhoto from '../images/joseph-2024.jpg'
import {FaAngleDown} from 'react-icons/fa6'
import {FaLinkedin} from 'react-icons/fa'

export default function firstPage() {
  const [copied, updateCopied] = useState(false)
  function copyEmail() {
    navigator.clipboard.writeText('jcschenk8@gmail.com')
    updateCopied(true)
  }

  return <section></section>
}
