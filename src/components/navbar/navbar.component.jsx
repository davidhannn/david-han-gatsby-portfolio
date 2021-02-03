import { node } from 'prop-types'
import React from 'react'

import './navbar.styles.scss'

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-desktop-list">
                <li><a href="#aboutMe" />About</li>
                <li><a href="#skills" />Skills</li>
                <li><a href="#projects" />Projects</li>
                <li><a href="#contactMe" />Contact Me</li>
            </ul>
            {/* <ul className="navbar-mobile-list">
                <li>About</li>
                <li>Portfolio</li>
                <li>Skills</li>
                <li>Contact</li>
            </ul> */}
        </nav>
    )
}

export default Navbar
