import React from "react"

export default function Random(props){
    return (
        <React.Fragment>
            <h2>Número aleatório</h2>
            <p>{ Math.round(Math.random() * (props.max - props.min) + props.min) }</p>
        </React.Fragment>
    )
}