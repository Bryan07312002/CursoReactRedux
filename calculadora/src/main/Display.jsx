import React from "react";
import "./Diplay.css"

export default function Display(props){
    return(
        <div className="display">{props.value}</div>
    )
}