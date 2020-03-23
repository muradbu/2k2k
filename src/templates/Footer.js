import React from 'react';
import Container from 'react-bootstrap/Container';
import DiscordRefer from '../components/DiscordRefer';
import Navbar from 'react-bootstrap/Navbar';

export default function Footer() {
    return (
        <Navbar sticky="bottom" bg="light" variant="light">
            <Container>
                © 2K2K Survival
            <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <DiscordRefer />
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
