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
          <div key={node.id}>
            <h3>{node.frontmatter.title}{" "} <span>-- {node.frontmatter.date}</span></h3>
            <p>{node.excerpt}</p>
	    <Link to={node.fields.slug}>Read More</Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
query {
  allMarkdownRemark {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
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
