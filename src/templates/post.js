import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

export default function Post({ data }) {
  let post = data.markdownRemark;

  let featuredImgFluid = post.frontmatter.featuredImage ? post.frontmatter.featuredImage.childImageSharp.fluid: null;

  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        {featuredImgFluid ? (
        <div style={{width: `300px`, float: `right`, margin: `0 0 1em 1em`}}>
         <Img fluid={featuredImgFluid} />
        </div>
        ) : ''}
       <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
query($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    html
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
  }
}
`
