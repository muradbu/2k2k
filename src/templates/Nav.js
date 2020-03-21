import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import DiscordRefer from '../components/DiscordRefer';
import Logo from '../components/Logo';
import Container from 'react-bootstrap/Container'


export default function Nav() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <Logo width="30px" />{' '}
                        2K2K Survival
                    </Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <DiscordRefer />
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

