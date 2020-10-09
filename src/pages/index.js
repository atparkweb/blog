import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Andy Park is a web developer located in Tokyo, Japan.</h2>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, minHeight: `400px` }}>
    </div>
  </Layout>
)

export default IndexPage
