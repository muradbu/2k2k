import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function Poll(props) {
    return (
        <li>
            {props.pollTitle}
            <ProgressBar now="60" label={`60%`} />
        </li>
    )
}