import React from "react";

export default function IndiretaPai(props){
    return(
        <React.Fragment>
            <h4>Filho</h4>
            <button onClick={function clickou(e){props.click("Bryan",19,true)}}>Fornecer Informações</button>
        </React.Fragment>
    ) 
}