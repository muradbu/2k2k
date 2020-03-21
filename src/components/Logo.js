import React from 'react';
import brand from '../../static/brand.svg';

export default function Logo(props) {
    return (
        <>
            <img src={brand} width={props.width} height={props.height} alt="logo" />
        </>
    )
}