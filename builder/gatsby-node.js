/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    const articleTemplate = path.resolve(`src/routes/article.js`)
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(`
        {
          allNodeArticle(limit: 10){
            edges{
              node{
                title
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create blog post pages.
        result.data.allNodeArticle.edges.forEach(edge => {
          createPage({
            path: `${edge.node.title}`, // required
            component: articleTemplate,
            context: {
              slug: edge.node.title, // in react this will be the `:slug` part
            },
          })
        })

        return
      })
    )
  })
}
