import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="Blog" />
      <div style={{ maxWidth: `960px`, marginBottom: `1.45rem`, minHeight: `250px` }}>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div className="blog-list-entry" key={node.id}>
            <div className="content">
              <header>
                <h3>{node.frontmatter.title}{" "}</h3>
                <span className="post-date">{node.frontmatter.date}</span>
              </header>
              <p>{node.excerpt}</p>
              <Link to={node.fields.slug}>Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
query {
  allMarkdownRemark(
    sort: {
      fields: [frontmatter___date]
      order: DESC
    }
  ) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
}
`
