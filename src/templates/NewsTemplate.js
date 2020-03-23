import React from "react";
import { graphql } from "gatsby";
import Layout from '../components/Layout';
import { Container, Row, Col } from "react-bootstrap";


export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <h1>{frontmatter.title}</h1>
            <h4>{frontmatter.date}</h4>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`