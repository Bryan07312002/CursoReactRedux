import React from "react";

export default function FamilyMembers(props){
    return(
        <div>
            <p>{props.nome} {props.sobrenome}</p>
        </div>
    );
}