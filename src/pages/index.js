import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import App from "../components/App"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Here is a list of things I need to do:</h1>
    <App />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
  </Layout>
)

export default IndexPage
