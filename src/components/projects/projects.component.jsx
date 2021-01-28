import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Project from '../project/project.component'
import Img from 'gatsby-image';

import './projects.styles.scss';

const Projects = () => {

    const data = useStaticQuery(graphql`
    {
        allContentfulProjects {
        edges {
            node {
                skills
                projects
                websiteLink
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
    `);

    return (
        <section id="projects">
            <h4>Projects</h4>
            <div className="projects-container">
                {data.allContentfulProjects.edges.map(({ node }, index) => (
                    <Project key={node.id} index={index} data={node} />
                ))}
            </div>
        </section>     
    )
}

export default Projects
