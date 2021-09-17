import React from "react";

export default function ParOuImpar(props){
    const test = props.numero % 2 === 0;
    return(
        <div>
            {test ? <span>Par</span> : <span>Impar</span>} 
        </div>
        
    )
}