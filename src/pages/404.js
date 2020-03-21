import React from 'react';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'gatsby';

export default () => {
    return (
        <Layout fullHeight>
            <Container>
                <Row>
                    <Col>
                        <h4>404 - Page not found</h4>
                        <Link to="/">Return to homepage</Link>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}