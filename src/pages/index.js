import React from 'react';
import StickyCard from '../components/cards/StickyCard';
import Card from '../components/cards/Card';
import GeneralCard from '../components/cards/GeneralCard';
import Poll from '../components/Poll';
import Stat from '../components/Stat';
import Brand from '../components/Brand';
import VoteExpand from '../components/VoteExpand';
import Layout from '../components/Layout';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default () => {

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
                        <Col>
                            <StickyCard title="Welcome to the new website!" description={stickyMessage} />
                            <Card title="Test card" description="News items will come here!" />
                        </Col>
                        <Col>
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
