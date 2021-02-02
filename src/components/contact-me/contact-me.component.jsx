import React, { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"


import GithubIcon from "../../assets/github.svg"
import LinkedInIcon from "../../assets/linkedin.svg"
import FacebookIcon from "../../assets/facebook.svg"
import InstagramIcon from "../../assets/instagram.svg"
import EmailIcon from "../../assets/email.svg"

import './contact-me.styles.scss'

const Contact = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 })
  })

  return (
    <section id="contactMe" className="contact-section">
        <h2 className="contact-section-title">Contact Me!</h2>
        <a href="mailto:davidhan2392@gmail.com"className="contact-section__email">
          <EmailIcon />
          <span>davidhan2392@gmail.com</span>
        </a>
        <div className="contact-section-links-container">
                    <button className="contact-section-links-button"><GithubIcon/><span>Github</span></button>
                    <button className="contact-section-links-button"><LinkedInIcon /><span>LinkedIn</span></button>
                    <button className="contact-section-links-button"><FacebookIcon /><span>Facebook</span></button>
                    <button className="contact-section-links-button"><InstagramIcon /><span>Instagram</span></button>
            </div>
    </section>
  )
}

export default Contact
