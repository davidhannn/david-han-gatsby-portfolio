import React from "react"
import { Link } from "gatsby"

import Projects from '../components/projects/projects.component'

// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Projects />
    {/* <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    </div>
)

export default IndexPage
