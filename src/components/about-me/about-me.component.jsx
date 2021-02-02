import React, { useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import './about-me.styles.scss'
import Img from "gatsby-image"

import Aos from 'aos';
import 'aos/dist/aos.css'
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
        <section id="aboutMe">
          <div className="about-me-container">
            <h3 className="about-title">About</h3>
                {data.allContentfulAboutMe.nodes.map((node) => (
                    <div className="about-container">
                        <div className="about-container__image" data-aos="fade-right" data-aos-duration="1000">
                            <Img fluid={node.aboutMeImage.fluid} className="about-container__image_img"/>
                        </div>   
                        <p className="about-container__description" data-aos="fade-left" data-aos-duration="1500">{node.aboutMeSection.aboutMeSection}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default AboutMe
