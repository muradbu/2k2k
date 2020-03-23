import React, { useState } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


export default function Brand(props) {

    const success = "Copied!";
    const error = "Something went wrong";
    const def = "Click to copy!";
    const [copyMessage, setCopyMessage] = useState(def);

    return (
        <>
            <OverlayTrigger placement="bottom" overlay={renderTooltip}>
                <h4 className={`text-center ${props.styleName}`} onClick={() => { copyAndChangeMessage() }}>Join us at <span className="text-brand">2k2k.org</span>!</h4>
            </OverlayTrigger>
        </>
    )

    function renderTooltip(props) {
        return <Tooltip {...props}>{copyMessage}</Tooltip>;
    }

    function copyAndChangeMessage() {
        navigator.clipboard.writeText("2k2k.org").then(function () {
            setCopyMessage(success);
        }, function () {
            setCopyMessage(error)
        }).then(
            setTimeout(() => {
                setCopyMessage(def)
            }, 3000)
        );
    }
}


