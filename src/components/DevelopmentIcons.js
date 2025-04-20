import React from 'react'
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
        <span className="development-icon">
          <IoLogoJavascript
            size={70}
            color={'rgba(17, 15, 15, 0.98)'}
          />
          Javascript
        </span>
        <span className="development-icon">
          <FaNodeJs
            size={70}
            color={'rgba(17, 15, 15, 0.98)'}
          />
          NodeJs
        </span>
        <span className="development-icon">
          <BiLogoPostgresql
            size={70}
            color={'rgba(17, 15, 15, 0.98)'}
          />
          PostgreSQL
        </span>
        <span className="development-icon">
          <FaDocker
            size={70}
            color={'rgba(17, 15, 15, 0.98)'}
          />
          Docker
        </span>
        <span className="development-icon">
          <SiKubernetes
            size={70}
            color={'rgba(17, 15, 15, 0.98)'}
          />
          Kubernetes
        </span>
        <span className="development-icon">
          <IoLogoVue
            size={70}
            color={'rgba(17, 15, 15, 0.98)'}
          />
          Vue
        </span>
        <span className="development-icon">
          <FaReact
            size={70}
            color={'rgba(17, 15, 15, 0.98)'}
          />
          React
        </span>
        <span className="development-icon">
          <FaPython
            size={70}
            color={'rgba(17, 15, 15, 0.98)'}
          />
          Python
        </span>
        <span className="development-icon">
          <PiFlaskFill
            size={70}
            color={'rgba(17, 15, 15, 0.98)'}
          />
          Flask
        </span>
      </div>
    </section>
  )
}
