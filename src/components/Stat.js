import React from 'react';

export default function Stat(props) {
    const small = props.player ? 'small' : '';
    const classes = `text-muted ${small}`;

    const player = props.player ? '' : ': ';

    return (
        <li>{props.title + player} <span className={classes}>{props.amount}</span></li>
    )
}