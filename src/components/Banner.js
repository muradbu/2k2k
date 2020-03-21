import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Logo from './Logo';

export default function Banner() {
    return (
        <Jumbotron className="text-center header">
            {/* <Container>
                <Logo width="100px" />
            </Container> */}
        </Jumbotron>
    )
}