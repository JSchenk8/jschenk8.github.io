import React from 'react'

import AwesomeSlider from 'react-awesome-slider'
import AwesomeSliderStyles from 'react-awesome-slider/src/styles'

import rigaudHome from '../images/rigaudHome3.jpg'
import rigaudCatalog from '../images/rigaudCatalog.jpg'
import rigaudCypres from '../images/rigaudCypres.jpg'
import rigaudCart from '../images/rigaudCart.jpg'


// import { DiGithubBadge } from 'react-icons/di'
// import { GoLink } from 'react-icons/go'
// import { IconContext } from 'react-icons/lib'

export default function Rigaud() {
  return <section className="hero is-fullheight rigaud-image" id="rigaud">
    <div className="hero-body is-justify-content-center">
      <div className="box" id="project-box">
        <div className="columns is-desktop">
          <div className="column carouselDiv has-text-centered">
            <div className="has-text-centered">
              <AwesomeSlider animation="cubeAnimation" cssModule={AwesomeSliderStyles}>
                <div className="carouselItem" data-src={rigaudHome} />
                <div className="carouselItem" data-src={rigaudCatalog} />
                <div className="carouselItem" data-src={rigaudCypres} />
                <div className="carouselItem" data-src={rigaudCart} />
              </AwesomeSlider>
            </div>
            {/* <div className="has-text-centered mt-6">
              <IconContext.Provider value={{ color: 'darkblue' }}>
                <a href="https://github.com/JSchenk8/project-4" target="blank"><button className="button m-2 is-large"><DiGithubBadge /></button></a>
                <a href="https://picster-gaproject.herokuapp.com/" target="blank"><button className="button m-2 is-large"><GoLink /></button></a>
              </IconContext.Provider>
              <p>Feel free to check out the code or the full site</p><br />
            </div> */}
          </div>
          <div className="column">
            <div>
              <p className="title">Rigaud</p>
              <p>Shortly after finishing my immersive course with General Assembly, I was approached by the new owner of Rigaud Candles to design a whole new website experience. Tasked with creating a back end on Shopify and using their JavaScript SDK I created a React front end. As the SDK is a GraphQL API it gave me a chance to familiarise myself with pulling data from GraphQL into JavaScript.</p><br />
              <p>As the company are French but also sell across Europe, the UK and the USA, I had to create a system to greet users in their language of choice. Using the built in browser language I created a modal which greeted users and asked them to confirm their language of choice. Once the language was selected the website then automatically used the correct checkout to sell in their market and alert the correct local distributor.</p><br />
              <p>I styled the website taking inspiration from the candle packaging, with the historic stripes persisting throughout the web experience. For users to see the catalog of six candles, I created a grid of cards which showed each scent. When clicked through the user could select the different sizes, which then displayed the details and price of each size automatically.</p><br />
              <p>Once added to cart, a modal appears to ask users if they wish to keep shopping or proceed to cart. The shopping bag logo at the top automatically updates to show the number of items in the bag and becomes clickable once items are first placed in the cart. </p><br />
              <p>At the cart, users can update the quantities of each item they want to purchase or remove them from the bag completely. They can then add custom discount codes and proceed to a secure checkout. This checkout is hosted by Shopify, meaning that the website itself does not hold any data and therefore has no risk of a security breach.</p><br />
              <p>Whilst the website was fully functional, it made sense to convert it to Liquid, the proprietary language used by Shopify. So, once the owner was happy with the design, I handed the code over to a Liquid specialist who is crafting a final product based on my original build.</p><br />
              <p>This provided a great opportunity to refine my React skills, learn about GraphQL and design and build a functional e-commerce website.</p><br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}