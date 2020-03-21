import React from 'react';

export default function StickyCard(props) {
    return (
        <div className="card mt-3">
            <div className="card-header">
                Stickied post
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
            </div>
        </div>
    )
}