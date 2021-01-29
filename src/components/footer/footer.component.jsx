import React from "react"
import GithubIcon from "../../assets/github.svg"
import LinkedInIcon from "../../assets/linkedin.svg"
import FacebookIcon from "../../assets/facebook.svg"
import InstagramIcon from "../../assets/instagram.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social-links">
        <a
          href="https://www.facebook.com/david.han.520/"
          className="social-media-icon"
        >
          <FacebookIcon />
        </a>
        <a
          href="https://www.instagram.com/davidhan92/"
          className="social-media-icon"
        >
          <InstagramIcon />
        </a>
        <a href="https://github.com/davidhannn" className="social-media-icon">
          <GithubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/david-han-21b856b5/"
          className="social-media-icon"
        >
          <LinkedInIcon />
        </a>
      </div>
      <p>Made by David Han © 2020</p>
    </footer>
  )
}

export default Footer
