import React, {useState} from "react";
import IndiretaFilho from "./IndiretaFiho";

export default function IndiretaPai(props){

    const[nome,setNome] = useState("?");
    const[idade,setIdade] = useState(0);
    const[binario, setBinario] = useState(false);
    
    function EnviarInfo(nome,idade,binario){
        setNome(nome);
        setIdade(idade);
        binario = binario ? "Verdadeiro" : "Falso"
        setBinario(binario);
    }

    return(
        <div>
            <p>{nome} {idade} {binario}</p>
            <h4>Pai</h4>
            <IndiretaFilho click = {EnviarInfo}></IndiretaFilho>
        </div>
    )
}