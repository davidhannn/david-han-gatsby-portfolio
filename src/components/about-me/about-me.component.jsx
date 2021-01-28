import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import './about-me.styles.scss'
import Img from "gatsby-image"

const AboutMe = () => {

const data = useStaticQuery(graphql`
{
    allContentfulAboutMe {
        nodes {
          aboutMeImage {
            fluid {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          aboutMeSection {
            aboutMeSection
          }
        }
      }
}
`)

    return (
        <section id="about">
            <h3 className="about-title">About</h3>
                {data.allContentfulAboutMe.nodes.map((node) => (
                    <div className="about-container">
                        <div className="about-container__image">
                            <Img fluid={node.aboutMeImage.fluid} className="about-container__image_img"/>
                        </div>   
                        <p className="about-container__description">{node.aboutMeSection.aboutMeSection}</p>
                    </div>
                ))}
        </section>
    )
}

export default AboutMe
