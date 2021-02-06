import React, { Fragment, useState, useLayoutEffect } from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';


import './navbar.styles.scss'

const Navbar = () => {

    const breakpoint = 620;
    const [width, setWidth] = useState(
        typeof window !== "undefined" ? window.innerWidth : breakpoint
      );
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar)

    useLayoutEffect(() => {

        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize)
    }, []);

    const mobileComponent = () => (
        <Fragment>
            <div className="navbar">
            <a href="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSidebar}/>
            </a>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items" onClick={showSidebar}>
                <li className="navbar-toggle">
                    <a href="#" className="menu-bars">
                        <AiIcons.AiOutlineClose />
                    </a>
                </li>
                <li className="nav-text">
                    <a href="#aboutMe">
                        <span>About</span>
                    </a>
                </li>
                <li className="nav-text">
                    <a href="#projects">
                        <span>Projects</span>
                    </a>
                </li>
                {/* <li className="nav-text">
                    <span>Skills</span>
                </li> */}
                <li className="nav-text">
                    <a href="#contact">
                        <span>Contact</span>
                    </a>
                </li>
            </ul>
        </nav>
        </Fragment>
    )

    const desktopComponent = () => (
        <nav className="navbar-desktop">
            <ul className="navbar-desktop__list">
                <li><a href="aboutMe" />About</li>
                {/* <li><a href="#skills" />Skills</li> */}
                <li><a href="projects" />Projects</li>
                <li><a href="contact" />Contact</li>
            </ul>
        </nav>
    )
    return (
        width < breakpoint ? mobileComponent() : desktopComponent()
    )
}

export default Navbar
