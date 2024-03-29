import React, { useEffect } from "react"
import Img from "gatsby-image"
import Aos from "aos"
import "aos/dist/aos.css"

import GithubIcon from "../../assets/github.svg"
import ExternalLinkIcon from "../../assets/external-link.svg"

import "./project.styles.scss"

const Project = ({
  data: {
    title,
    skills,
    projects,
    websiteLink,
    githubLink,
    description,
    id,
    image,
  },
}) => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <div className="project-container-single">
      <div className="project-container__img">
        <Img
          fluid={image.fluid}
          imgStyle={{ objectFit: "cover", objectPosition: "top" }}
          style={{ height: "100%", width: "100%" }}
          alt=""
          className="project-container__img_img"
        />
      </div>
      <div className="project-container__info">
        <div className="project-container__title">
          <span>{title}</span>
        </div>
        <p className="project-container__text">{description}</p>

        <div className="project-container__skills-section">
          {skills.map(skill => (
            <span className="project-container__skills-button">{skill}</span>
          ))}
        </div>
        <div className="project-container__link-section">
          <a href={websiteLink} className="project-container__link">
            Visit Site
          </a>
          <a href={githubLink} className="project-container__link">
            Github
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project
