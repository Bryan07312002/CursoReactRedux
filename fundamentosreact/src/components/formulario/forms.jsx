import React, {useState} from "react";
import "./forms.css";

export default function IndiretaPai(props){
    const[valor,setValor] = useState("Inicial");
    
    function rescrever(e){
        setValor(e.target.value)
    }

    return(
        <div>
            <p>{valor}</p>
            <div style={{display :'flex',flexDirection:'column'}}>
                Mutavel<input value={valor} onChange={rescrever} />
                Imutavel<input value={valor} readOnly />
                Não Controlado<input value={undefined} />
            </div>
            
        </div>
    )
}