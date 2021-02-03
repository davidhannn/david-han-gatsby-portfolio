import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import './hero.styles.scss'

import StyledButton from '../styled-button/styled-button.component';

import GithubIcon from "../../assets/github.svg"
import LinkedInIcon from "../../assets/linkedin.svg"
import FacebookIcon from "../../assets/facebook.svg"
import InstagramIcon from "../../assets/instagram.svg"

const Hero = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return (
        <section className="hero-container">
                <h1 data-aos="fade-up" data-aos-duration="1000"><span>David Han</span></h1>
                <span class="hero-container-description" data-aos="fade-up" data-aos-duration="1500">Web Developer</span>
                <StyledButton data-aos="fade-up" data-aos-duration="2000">Resume</StyledButton>
                <div className="icon-scroll"></div>
        </section>
    )
}

export default Hero
