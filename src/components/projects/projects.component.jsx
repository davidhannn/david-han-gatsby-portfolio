import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Project from "../project/project.component"
import Img from "gatsby-image"

import "./projects.styles.scss"

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulProjects {
        edges {
          node {
            skills
            projects
            websiteLink
            githubLink
            description
            id
            title
            image {
              fluid {
                src
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section id="projects" className="slanted slanted-light">
      <svg
        _ngcontent-serverApp-c84=""
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        class="slicerLight"
      >
        <polygon _ngcontent-serverApp-c84="" points="0,0 0,100 100,0"></polygon>
      </svg>
      <div className="projects-title">Projects</div>
      <div className="projects-container">
        {data.allContentfulProjects.edges.map(({ node }, index) => (
          <Project key={node.id} index={index} data={node} />
        ))}
      </div>
    </section>
  )
}

export default Projects
