import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { useMediaQuery } from 'react-responsive';
import Logo from './Logo';

const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 })
    return isNotMobile ? children :
        <Jumbotron className="text-center mb-0 br-0">
            <Logo width="100px" />
        </Jumbotron>
}

const Banner = () => (
    <div>
        <Default>
            <Jumbotron className="text-center header br-0" />
        </Default>
    </div>
)

export default Banner