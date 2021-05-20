import React from 'react'
import LandingPage from './LandingPage'
import AboutMe from './AboutMe'
import Rigaud from './Rigaud'
import Picster from './Picster'
import ParkPong from './ParkPong'
import FilmFinder from './FilmFinder'
import ZombieSweeper from './ZombieSweeper'
import Contact from './Contact'


export default function Home() {


  return <div>
    <LandingPage />
    <div className="level"></div>
    <AboutMe />
    <div className="level"></div>
    <Rigaud />
    <div className="level"></div>
    <Picster />
    <div className="level"></div>
    <ParkPong />
    <div className="level"></div>
    <FilmFinder />
    <div className="level"></div>
    <ZombieSweeper />
    <div className="level"></div>
    <Contact />
  </div>
}
