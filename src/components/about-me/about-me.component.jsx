import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./about-me.styles.scss"
import Img from "gatsby-image"
import StyledButton from "../styled-button/styled-button.component"

import Aos from "aos"
import "aos/dist/aos.css"
const AboutMe = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

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
    <section id="aboutMe" className="slanted slanted-dark">
      <svg
        _ngcontent-serverApp-c84=""
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        class="slicer"
      >
        <polygon _ngcontent-serverApp-c84="" points="0,0 100,0 0,100"></polygon>
      </svg>
      <div className="about-title">About</div>
      <div className="about-me-card-container">
        <div className="about-me-card">
          {data.allContentfulAboutMe.nodes.map(node => (
            <div className="about-container">
              <div className="about-container__image">
                <Img
                  fluid={node.aboutMeImage.fluid}
                  className="about-container__image_img"
                />
              </div>
              <div className="about-container__right">
                <p className="about-container__description">
                  {node.aboutMeSection.aboutMeSection}
                </p>

                <StyledButton>View Resume</StyledButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutMe
