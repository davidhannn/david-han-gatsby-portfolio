import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import './about-me.styles.scss'
import Img from "gatsby-image"

const AboutMe = () => {

// const data = useStaticQuery(graphql`
// {
//     allContentfulAboutMe {
//         edges {
//         node {
//             aboutMeImage {
//                 fluid {
//                     src
//                     ...GatsbyContentfulFluid_tracedSVG
//                     }
//                 }
//                 aboutMeSection {
//                 aboutMeSection
//                 }
//         }
//         }
//     }
// }
// `)

    return (
        <section id="about">
            <h3>About Me</h3>
            <div className="about-container">
                <div> 
                    {/* <Img fluid={data.allContentfulAboutMe.edges.node.aboutMeImage.fluid} /> */}
                </div>
            </div>
        </section>
    )
}

export default AboutMe
