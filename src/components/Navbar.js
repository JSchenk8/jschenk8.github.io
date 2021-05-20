import React from 'react'
import { useState } from 'react'


export default function Navbar() {

  const [mobNav, updateMobNav] = useState(false)

  return <nav className="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
    <div className="navbar-brand" id="navbarImage">
      <a onClick={() => updateMobNav(!mobNav)} role="button" className={`navbar-burger has-text-white ${mobNav ? 'is-active' : ''}`} >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>
    <div id="navbarBasicExample" className={`navbar-menu ${mobNav ? 'is-active' : ''}`}>
      <div className="navbar-start">


        <div className="navbar-item has-dropdown is-hoverable">

          <div className="navbar-dropdown">
            <hr className="navbar-divider" />
          </div>
        </div>
      </div>
      <div className="navbar-end">
        <a className={`navbar-item ${!mobNav ? 'has-text-white' : ''}`} href="#about">About Me</a>
        <div className="navbar-item has-dropdown is-hoverable">
          <a className={`navbar-link ${!mobNav ? 'has-text-white' : ''}`}>Projects</a>
          <div className="navbar-dropdown">
            <a className="navbar-item" href="#rigaud">Rigaud</a>
            <a className="navbar-item" href="#picster">Picster</a>
            <a className="navbar-item" href="#parkpong">Park Pong</a>
            <a className="navbar-item" href="#filmfinder">Film Finder</a>
            <a className="navbar-item" href="#zombiesweeper">ZombieSweeper</a>
          </div>
        </div>
        <a className={`navbar-item ${!mobNav ? 'has-text-white' : ''}`} href="#contact">Contact Me</a>
      </div>
    </div>
  </nav >



}