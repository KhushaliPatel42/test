import React from 'react'
import OutputScreen from './OutputScreen'

export default function Output(props) {
    return (
        <div>
              < OutputScreen value={props.input}/>
                 < OutputScreen value={props.output}/>
        </div>
    )
}
