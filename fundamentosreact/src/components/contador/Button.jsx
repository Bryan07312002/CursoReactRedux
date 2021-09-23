import React from "react";

export default function Button(props){
    return(
        <React.Fragment>
            <button onClick={props.Somar}>+</button>
            <button onClick={props.Subtrair}>-</button>
        </React.Fragment>
    )
}