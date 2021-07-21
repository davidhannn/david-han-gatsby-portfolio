import React, { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

import GithubIcon from "../../assets/github.svg"
import LinkedInIcon from "../../assets/linkedin.svg"
import FacebookIcon from "../../assets/facebook.svg"
import InstagramIcon from "../../assets/instagram.svg"
import EmailIcon from "../../assets/email.svg"
import MailIcon from "../../assets/envelope.svg"

import "./contact-me.styles.scss"

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  })

  return (
    <section id="contact" className="contact-container">
      <svg
        _ngcontent-serverApp-c84=""
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        class="slicerLight"
      >
        <polygon _ngcontent-serverApp-c84="" points="0,0 0,100 100,0"></polygon>
      </svg>
      <div className="contact-section">
        <h2 className="contact-section-title">Contact</h2>
        {/* <a
          href="mailto:davidhan2392@gmail.com"
          className="contact-section__email"
        >
          <EmailIcon />
          <span>davidhan2392@gmail.com</span>
        </a> */}
        <div className="contact-section-links-container">
          <a
            href="https://github.com/davidhannn"
            className="contact-section-links-button"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/david-han-21b856b5/"
            className="contact-section-links-button"
          >
            <LinkedInIcon />
          </a>
          {/* <a
            href="https://www.facebook.com/david.han.520/"
            className="contact-section-links-button"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.instagram.com/davidhan92/"
            className="contact-section-links-button"
          >
            <InstagramIcon />
          </a> */}

          <a
            href="mailto:davidhan2392@gmail.com"
            className="contact-section-links-button"
          >
            <EmailIcon />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
