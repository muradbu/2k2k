import React from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

export default function VoteExpand() {
  return (
    <>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Voting will be rewarded ingame <span role="img" aria-label="wink">😉</span>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <a href="https://minecraft-server-list.com/server/452415/vote/" target="_blank" rel="noopener noreferrer">minecraft-server-list.com</a><br />
              <a href="https://topg.org/Minecraft/in-594121" target="_blank" rel="noopener noreferrer">topg.org</a><br />
              <a href="https://www.planetminecraft.com/server/2k2k-survival/vote/" target="_blank" rel="noopener noreferrer">planetminecraft.com</a><br />
              <a href="https://minecraft-mp.com/server/244693/vote/" target="_blank" rel="noopener noreferrer">minecraft-mp.com</a><br />
              <a href="https://minecraft-server.net/vote/2K2K/" target="_blank" rel="noopener noreferrer">minecraft-server.net</a><br />
            </Card.Body>
          </Accordion.Collapse>
          <noscript>
            <Card.Body>
              <a href="https://minecraft-server-list.com/server/452415/vote/" target="_blank" rel="noopener noreferrer">minecraft-server-list.com</a><br />
              <a href="https://topg.org/Minecraft/in-594121" target="_blank" rel="noopener noreferrer">topg.org</a><br />
              <a href="https://www.planetminecraft.com/server/2k2k-survival/vote/" target="_blank" rel="noopener noreferrer">planetminecraft.com</a><br />
              <a href="https://minecraft-mp.com/server/244693/vote/" target="_blank" rel="noopener noreferrer">minecraft-mp.com</a><br />
              <a href="https://minecraft-server.net/vote/2K2K/" target="_blank" rel="noopener noreferrer">minecraft-server.net</a><br />
            </Card.Body>
          </noscript>
        </Card>
      </Accordion>
    </>
  )
}