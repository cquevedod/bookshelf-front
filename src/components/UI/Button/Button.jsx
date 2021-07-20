import React from 'react'

function Button(props) {

    return (
        <button disabled={props.disabled} className={props.className} type={props.type}>{props.children}</button>
    )
};

export default Button;