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
                <h1 data-aos="fade-up" data-aos-duration="1000"><span>David Han</span></h1>
                <span class="hero-container-description" data-aos="fade-up" data-aos-duration="1500">Web Developer</span>
                <button className="hero-container__resume" data-aos="fade-up" data-aos-duration="2000">View Resume</button>
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
