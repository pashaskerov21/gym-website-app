import React from 'react'
import aboutImage from '../images/about.png'

function About() {
  return (
    <section id='about'>
      <div className="container">
        <h1 className="mb-5">ABOUT</h1>
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="about-image">
              <img src={aboutImage} alt="about-img" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="about-text">
              <h1>Learn more about us</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam magnam doloremque saepe harum, consequatur eius consequuntur, laboriosam quo facere obcaecati tempore beatae, inventore eum impedit.</p>
              <a href="#" className="general-button">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
