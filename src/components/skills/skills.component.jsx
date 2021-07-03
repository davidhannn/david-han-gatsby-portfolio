import React, { Fragment, useEffect } from "react"
import CSSLogo from "../../assets/css-3.svg"
import GitLogo from "../../assets/git-icon.svg"
import HTMLLogo from "../../assets/html-5.svg"
import JavascriptLogo from "../../assets/javascript.svg"
import NodeLogo from "../../assets/nodejs.svg"
import ReactLogo from "../../assets/icons8-react.svg"
import PostgresqlLogo from "../../assets/postgresql.svg"
import PostmanLogo from "../../assets/postman.svg"
import VisualStudioLogo from "../../assets/visualstudio.svg"
import MongodbLogo from "../../assets/mongodb.svg"
import FirebaseLogo from "../../assets/firebase.svg"
import TypescriptLogo from "../../assets/typescript.svg"
import Aos from "aos"
import "aos/dist/aos.css"

import "./skills.styles.scss"

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  })

  return (
    <section id="skills" className="skills-container">
      <svg
        _ngcontent-serverApp-c84=""
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        class="slicerDark"
      >
        <polygon _ngcontent-serverApp-c84="" points="0,0 100,0 0,100"></polygon>
      </svg>
      <h4 className="skills-title">Skills</h4>
      <div className="skills-container__row">
        <div className="skills-box">
          <div className="skills-box-title">Front End</div>
          <div className="skills-box-icons">
            <HTMLLogo />
            <CSSLogo />
            <JavascriptLogo />
            <TypescriptLogo />
            <ReactLogo />
          </div>
        </div>
        <div className="skills-box">
          <div className="skills-box-title">Back End</div>
          <div className="skills-box-icons">
            <NodeLogo />
            <PostgresqlLogo />
            <MongodbLogo />
            <FirebaseLogo />
          </div>
        </div>
        <div className="skills-box">
          <div className="skills-box-title">Tools</div>
          <div className="skills-box-icons">
            <GitLogo />
            <PostmanLogo />
            <VisualStudioLogo />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
