import React from 'react'
import '../App.css'
export default function Button(props) {
    return (
            <input type="button" disabled={props.disable} value={props.label} onClick={props.handleClick} className="btn"/>
    )
}
