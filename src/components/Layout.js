import React from "react";
import Footer from '../templates/Footer';
import Banner from './Banner';
import Nav from '../templates/Nav';
import Helmet from "react-helmet";
import favicon from '../../static/favicon.ico';
import faviconIOS from '../../static/apple-touch-icon-180x180.png';
import faviconAndroid from '../../static/favicon-192x192.png';

export default function Layout(props) {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>2K2K - Survival</title>
                <html lang="en" />
                <meta name="description" content="A Minecraft adventure awaits you with a custom survival world at 2K2K!" />
                <meta name="theme-color" content="#6000ff" />
                <link rel="shortcut icon" href={favicon} />
                <link rel="icon" type="image/png" href={faviconAndroid} sizes="192x192" />
                <link rel="apple-touch-icon" sizes="180x180" href={faviconIOS} />
            </Helmet>
            <Nav />
            {props.banner ? <Banner /> : ''}
            <div className={`py-5 bg-light ${props.fullHeight ? "h-100" : ''}`}>
                {props.children}
            </div>
            <Footer />
        </>
    )
}