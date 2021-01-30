import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import './hero.styles.scss'

import GithubIcon from "../../assets/github.svg"
import LinkedInIcon from "../../assets/linkedin.svg"
import FacebookIcon from "../../assets/facebook.svg"
import InstagramIcon from "../../assets/instagram.svg"

const Hero = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return (
            <div className="hero-container">
                <h1><span>David Han</span></h1>
                <span class="hero-container-description">Web Developer</span>
                <button className="hero-container__resume">View Resume</button>
                {/* <h2 id="hero-container-text" data-aos="fade-up" data-aos-duration="1000">Hello There! My name is</h2>
                <h1 id="hero-container-name" data-aos="fade-up" data-aos-duration="2000">David Han</h1>
                <h2 id="hero-container-text" data-aos="fade-up" data-aos-duration="3000">Web Developer</h2>
                <button className="hero-container__resume">View Resume</button> */}
            <div className="hero-container-links-container">
                    <button className="hero-container-links-button"><GithubIcon/><span>Github</span></button>
                    <button className="hero-container-links-button"><LinkedInIcon />LinkedIn</button>
                    <button className="hero-container-links-button"><FacebookIcon />Facebook</button>
                    <button className="hero-container-links-button"><InstagramIcon />Instagram</button>
            </div>
        </div>
    )
}

export default Hero
