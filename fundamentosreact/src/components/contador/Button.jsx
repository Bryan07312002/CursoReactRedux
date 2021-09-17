import React from "react";

export default function Button(props){
    return(

        <div>
            <button onClick={props.Somar}>+</button>
            <button onClick={props.Subtrair}>-</button>
        </div>
    )
}