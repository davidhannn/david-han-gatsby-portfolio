import React, { Fragment } from "react"
import { Link } from "gatsby"

import Hero from '../components/hero/hero.component'
import AboutMe from '../components/about-me/about-me.component'
import Projects from '../components/projects/projects.component'
import Navbar from '../components/navbar/navbar.component'
import Skills from '../components/skills/skills.component'

import './index.styles.scss';

// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <Navbar />
    <Hero />
    <AboutMe />
    {/* <Skills /> */}
    <Projects />
  </div>
)

export default IndexPage
