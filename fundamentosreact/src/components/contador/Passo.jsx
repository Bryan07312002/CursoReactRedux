import React from "react";

export default function Passo(props){
    
    return(
        <React.Fragment>
            <input onChange={props.Change} value={props.passo} type="number"/>
        </React.Fragment>
    )
}