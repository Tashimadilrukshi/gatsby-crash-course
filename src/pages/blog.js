import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'

const BlogPage = ({data}) => (
    <div>
        <h1>Latest posts</h1>
        {data.allMarkdownRemark.edges.map(post => (
            <div>
                <h3>{post.node.frontmatter.title}</h3>
                <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
                <br/>
                <br/>
                <Link to={post.node.frontmatter.path}>Read more</Link>
                <hr/>
            </div> 
        ))}
    </div>
    
)

export const pageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark {
            edges {
              node {
                id
                frontmatter {
                  path
                  title
                  date
                  author
                }
              }
            }
        }
    }
`

export default BlogPage
