import React from 'react';

export default function GeneralCard(props) {
    return (
        <div className="card mt-3">
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <ul className="list-no-style">
                    {props.children}
                </ul>
            </div>
        </div>
    )
}