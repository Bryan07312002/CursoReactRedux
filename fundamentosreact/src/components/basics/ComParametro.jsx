import React from "react";

export default function ComParametro(props){
    return(
        <div>
            <h2>Com Parametro</h2>
            <p>{ props.titulo }</p>
            <p>{ props.subtitulo }</p>
        </div>
    );
};
