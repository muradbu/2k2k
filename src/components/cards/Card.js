import React from 'react';
import Card from 'react-bootstrap/Card'

export default function CardItem(props) {
  return (
    <Card className="mt-3">
      {props.sticky ? <Card.Header>Featured announcement</Card.Header> : ''}
      <Card.Body>
        <Card.Title>
          {props.title}
        </Card.Title>
        <Card.Text>
          {props.children}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">
          {props.date}
        </small>
      </Card.Footer>
    </Card>
  )
}