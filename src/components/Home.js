import React from 'react'
// import Navbar from './Navbar'
import LandingPage from './LandingPage'
import AboutMe from './AboutMe'
import Picster from './Picster'
import ParkPong from './ParkPong'
import FilmFinder from './FilmFinder'
import ZombieSweeper from './ZombieSweeper'
import Contact from './Contact'

export default function Home() {


  return <div>
    {/* <Navbar /> */}
    <LandingPage />
    <AboutMe />
    <Picster />
    <ParkPong />
    <FilmFinder />
    <ZombieSweeper />
    <Contact />
  </div>
}
