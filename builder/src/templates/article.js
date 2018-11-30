import React from 'react'
import { graphql } from 'gatsby'

class Article extends React.Component {
  render() {
    const post = this.props.data.nodeArticle

    return (
      <div>
        <h1>{post.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: post.content.childMarkdownRemark.html,
          }}
        />
      </div>
    )
  }
}

export default Article

export const pageQuery = graphql`
 query BlogPostBySlug($slug: String!) {
   contentfulBlogPost(fields: { slug: { eq: $slug } }) {
     title
      content {
        childMarkdownRemark {
          html
        }
      }
   }
 }
