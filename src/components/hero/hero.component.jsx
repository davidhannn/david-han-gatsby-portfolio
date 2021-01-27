import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import './hero.styles.scss'

const Hero = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return (
        <div>
            <div className="hero-container">
                <h2 id="hero-container-text" data-aos="fade-up" data-aos-duration="1000">Hello There! My name is</h2>
                <h1 id="hero-container-name" data-aos="fade-up" data-aos-duration="2000">David Han</h1>
                <h2 id="hero-container-text" data-aos="fade-up" data-aos-duration="3000">Web Developer</h2>
            </div>
        </div>
    )
}

export default Hero
