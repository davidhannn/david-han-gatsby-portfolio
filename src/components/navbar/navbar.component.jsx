import { node } from 'prop-types'
import React from 'react'

import './navbar.styles.scss'

const Navbar = () => {
    return (
        <nav className="nav-links-container">
            <ul className="nav-links">
                <li><a href="#aboutMe" />About</li>
                <li><a href="#skills" />Skills</li>
                <li><a href="#projects" />Projects</li>
                <li><a href="#contactMe" />Contact Me</li>
            </ul>
        </nav>
    )
}

export default Navbar
