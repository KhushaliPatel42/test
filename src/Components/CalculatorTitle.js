import React from 'react'
import '../App.css'
export default function CalculatorTitle(props) {
    return (
        <div>
            <div className="App">
          <h1>{props.title}</h1> 
        </div>
        </div>
    )
}
