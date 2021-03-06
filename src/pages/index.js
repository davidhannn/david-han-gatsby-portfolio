import React, { Fragment } from "react"
import { Link } from "gatsby"

import Hero from "../components/hero/hero.component"
import AboutMe from "../components/about-me/about-me.component"
import Projects from "../components/projects/projects.component"
import Navbar from "../components/navbar/navbar.component"
import Skills from "../components/skills/skills.component"
import ContactMe from "../components/contact-me/contact-me.component"
import Footer from "../components/footer/footer.component"
import SEO from "../components/seo/seo.component"

import "./index.styles.scss"

const IndexPage = () => (
  <div>
    <SEO title="David Han" description="Home of David Han's Portfolio" />
    <Navbar />
    <Hero />
    <AboutMe />
    <Projects />
    <Skills />
    <ContactMe />
    <Footer />
  </div>
)

export default IndexPage
