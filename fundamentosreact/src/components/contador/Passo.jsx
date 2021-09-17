import React from "react";

export default function Passo(props){
    
    return(
        <div>
            <input onChange={props.Change} value={props.passo} type="number"/>
        </div>
    )
}