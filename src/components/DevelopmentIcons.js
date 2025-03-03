import React from 'react'
// import profilePhoto from '../images/joseph-2024.jpg'
import audioMixing from '../images/spotlight-audio.jpg'
import {IoLogoJavascript} from 'react-icons/io5'
import {FaNodeJs} from 'react-icons/fa'
import {BiLogoPostgresql} from 'react-icons/bi'
import {FaDocker} from 'react-icons/fa'
import {SiKubernetes} from 'react-icons/si'
import {IoLogoVue} from 'react-icons/io5'
import {FaReact} from 'react-icons/fa'
import {FaPython} from 'react-icons/fa'
import {PiFlaskFill} from 'react-icons/pi'

export default function ProfileCard() {
  return (
    <section>
      <div className="development-icons">
        <IoLogoJavascript
          size={70}
          color={'rgba(255, 255, 255, 0.8)'}
        />
        <FaNodeJs
          size={70}
          color={'rgba(255, 255, 255, 0.8)'}
        />
        <BiLogoPostgresql
          size={70}
          color={'rgba(255, 255, 255, 0.8)'}
        />
        <FaDocker
          size={70}
          color={'rgba(255, 255, 255, 0.8)'}
        />
        <SiKubernetes
          size={70}
          color={'rgba(255, 255, 255, 0.8)'}
        />
        <IoLogoVue
          size={70}
          color={'rgba(255, 255, 255, 0.8)'}
        />
        <FaReact
          size={70}
          color={'rgba(255, 255, 255, 0.8)'}
        />
        <FaPython
          size={70}
          color={'rgba(255, 255, 255, 0.8)'}
        />
        <PiFlaskFill
          size={70}
          color={'rgba(255, 255, 255, 0.8)'}
        />
      </div>
    </section>
  )
}
