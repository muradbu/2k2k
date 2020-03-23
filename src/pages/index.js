import React from 'react';
import CardItem from '../components/cards/Card';
import GeneralCard from '../components/cards/GeneralCard';
import Poll from '../components/Poll';
import Stat from '../components/Stat';
import Brand from '../components/Brand';
import VoteExpand from '../components/VoteExpand';
import Layout from '../components/Layout';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default ({ data }) => {

    const stickyMessage = ["This website is currently in development. If you have any recommendations please let us know in our ",
        <a href="https://discord.gg/UTgWm3m" target="_blank" rel="noopener noreferrer">Discord</a>, " channel!",
        <br />, <br />, "The server is constantly being improved with optimizations to make your experience better."]

    return (
        <>
            <Layout banner>
                <Container>
                    <Brand styleName="mb-4" />
                    <VoteExpand />
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            {data.allMarkdownRemark.edges.map(({ node }, key) => (
                                <CardItem title={node.frontmatter.title} sticky={node.frontmatter.sticky} date={node.frontmatter.date} >
                                    <div dangerouslySetInnerHTML={{__html: node.html}}></div>
                                </CardItem>
                            ))}
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <GeneralCard title="Polls">
                                <Poll pollTitle="Placeholder poll" />
                                <small className="font-italic bottom">Log into the server to vote</small>
                            </GeneralCard>
                            <GeneralCard title="Stats">
                                <Stat title="Placeholder stat" amount="1234" />
                                <Stat title="Placeholder stat" amount="1234" />
                                <Row className="py-3">
                                    <Col>
                                        <b>Top player kills:</b>
                                        <Stat title="Placeholder username" player={true} amount="1234" />
                                    </Col>
                                    <Col>
                                        <b>Top voters:</b>
                                        <Stat title="Placeholder username" player={true} amount="1234" />
                                    </Col>
                                </Row>
                            </GeneralCard>
                        </Col>
                    </Row>
                </Container>
            </Layout>
        </>
    )
}


/* 
excerpt (pruneLength: 250) to limit max chars visible
*/
export const query = graphql`
query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt (pruneLength: 250)
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            sticky
          }
        }
      }
    }
  }
`