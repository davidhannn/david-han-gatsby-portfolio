import React from 'react'
import Img from 'gatsby-image';

import GithubIcon from "../../assets/github.svg"
import ExternalLinkIcon from "../../assets/external-link.svg"

import './project.styles.scss';

const Project = ({ data: { title, skills, projects, websiteLink, description, id, image }}) => {

    return (
        <div className="project-container-single">
            <div className="project-container__img">
                <Img fluid={image.fluid} alt="" className="project-container__img_img"/>
            </div>
            <div className="project-container__info">
                <div className="project-container__title">
                    <span>{title}</span>
                </div>
                <p className="project-container__text">{description}</p>
                <a href={websiteLink} className="project-container__link">Visit Website</a>
            </div>
{/* 
            <div className="projects-about-section">
                {skills.map((skill) => (<p>{skill}</p>))}
                <p className="stack">{description}</p>
            </div> */}
        </div>

    )
}

export default Project
