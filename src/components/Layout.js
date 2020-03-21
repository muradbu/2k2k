import React from "react";
import Footer from '../templates/Footer';
import Banner from './Banner';
import Nav from '../templates/Nav';

export default function Layout(props) {
    return (
        <>
            <Nav />
            {props.banner ? <Banner /> : ''}
            <div className={`py-5 bg-light ${props.fullHeight ? "h-100" : ''}`}>
                {props.children}
            </div>
            <Footer />
        </>
    )
}