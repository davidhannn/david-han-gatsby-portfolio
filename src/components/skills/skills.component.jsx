import React, { Fragment, useEffect } from "react"
import BootstrapLogo from "../../assets/bootstrap.svg"
import CSSLogo from "../../assets/css-3.svg"
import GatsbyLogo from "../../assets/gatsby.svg"
import GitLogo from "../../assets/git-icon.svg"
import HTMLLogo from "../../assets/html-5.svg"
import JavascriptLogo from "../../assets/javascript.svg"
import NodeLogo from "../../assets/nodejs.svg"
import ReactLogo from "../../assets/icons8-react.svg"
import SassLogo from "../../assets/sass.svg"
import Aos from "aos"
import "aos/dist/aos.css"

import './skills.styles.scss'

const Skills = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 })
  })

  return (
      <section id="#skills" className="skills-container">
        <h4>Skills</h4>
        <div className="icon-container">
          <a>
            <HTMLLogo />
            <p>HTML5</p>
          </a>
          <a>
            {" "}
            <CSSLogo /> <p>CSS</p>
          </a>
          <a>
            <JavascriptLogo />
            <p>ES6</p>
          </a>
          <a>
            <ReactLogo />
            <p>React</p>
          </a>
          <a>
            <GitLogo />
            <p>Git</p>
          </a>
          <a>
            <NodeLogo />
            <p>Node</p>
          </a>
          <a>
            <GatsbyLogo />
            <p>Gatsby</p>
          </a>
          <a>
            {" "}
            <SassLogo />
            <p>Sass</p>
          </a>
          <a>
            <BootstrapLogo />
            <p>Bootstrap</p>
          </a>
        </div>
      </section>
  )
}

export default Skills
