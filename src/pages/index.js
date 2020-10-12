import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2 className="page-title">Blog</h2>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, minHeight: `250px` }}>
      <p>No entries</p>
    </div>
  </Layout>
);

export default IndexPage;
