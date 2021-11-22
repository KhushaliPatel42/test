import React from 'react'
import '../App.css'
export default function OutputScreen(props) {
    return (
        <div className="App">
            <input type="text" readOnly value={props.value} className="output"/>
        </div>
    )
}
