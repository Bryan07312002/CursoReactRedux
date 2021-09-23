import React from "react";

import DiretaFilho from "./DiretaFilho";

export default function DiretaPai(props){
    return(
        <React.Fragment>
            <DiretaFilho nome="Bryan" idade={10} bool={true}/>
        </React.Fragment>
    )
}