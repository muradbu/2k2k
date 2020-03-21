import React from 'react';
import Container from 'react-bootstrap/Container';
import DiscordRefer from '../components/DiscordRefer';
import { Row, Col } from 'react-bootstrap';

export default function Footer() {
    return (
        <footer className="text-muted py-4">
            <Container>
                <Row>
                    <Col>
                        <p>© 2K2K</p>
                    </Col>
                    <Col className="d-flex flex-row-reverse">
                        <DiscordRefer />
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
