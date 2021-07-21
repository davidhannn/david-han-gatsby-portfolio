import React, { useEffect, useRef } from "react"
import { init } from "ityped"
import Aos from "aos"
import "aos/dist/aos.css"
import "./hero.styles.scss"

// import StyledButton from "../styled-button/styled-button.component"

// import GithubIcon from "../../assets/github.svg"
// import LinkedInIcon from "../../assets/linkedin.svg"
// import FacebookIcon from "../../assets/facebook.svg"
// import InstagramIcon from "../../assets/instagram.svg"

const Hero = () => {
  const textRef = useRef()

  useEffect(() => {
    Aos.init({ duration: 1000 })
    init(textRef.current, {
      showCursor: false,
      strings: ["Web Developer", "Programmer", "Engineer"],
    })
  }, [])

  return (
    <section id="hero" className="hero-container">
      <h1 data-aos="fade-up" data-aos-duration="1000">
        <span>David Han</span>
      </h1>
      <span
        class="hero-container-description"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="wrapper">
          <h3>
            &lt; <span ref={textRef}></span> /&gt;
          </h3>
        </div>
      </span>

      <a href="#aboutMe">
        <div className="icon-scroll"></div>
      </a>
    </section>
  )
}

export default Hero
