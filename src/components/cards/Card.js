import React from 'react';
import Button from 'react-bootstrap/Button';

export default function Card(props) {
  return (
    <div className="card mt-3">
      <img className="card-img-top" src="https://via.placeholder.com/362x180" alt="news" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <Button variant="primary">Read more</Button>
      </div>
    </div>
  )
}