import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'


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
            {data.allContentfulProjects.edges.map(({ node }, index) => (
                <p>{node.websiteLink}</p>
            ))}
            hEllo from Projects
        </section>
    )
}

export default Projects
