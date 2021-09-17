import React from "react";
import If from "../condicional/if"

export default function DiretaFilho(props){
    return(
        <div>
            <p>{props.nome}</p>
            <p>{props.idade}</p>
            <p><If test={props.bool}>
                Verdadeiro
            </If></p>
        </div>
    )
}