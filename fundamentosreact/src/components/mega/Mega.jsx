import React, {useState} from "react";
import './Mega.css';

export default function Mega(){
    const[numero,setNumero] = useState(0);
    const[mega,setMega] = useState(0);

    function Change(e){
       var numero = parseInt(e.target.value)
       if(!numero){
            setNumero(0)
       }
       if(Number.isInteger(numero)){
            setNumero(numero)
       }
    }
    
    function Gerador(){
        var max = 50
        var min = 0
        var randray = []
        for (let i = 0; i < numero; i++) {
            var rand = Math.floor(Math.random() * max) - min;
            randray[i] = rand +" "
        }
        setMega(randray)
    }

    return(
        <div className="Mega">
            <p>{mega}</p>
            <input onChange={Change} value={numero}/><br />
            <button onClick={Gerador}>Enviar</button>
        </div>
    )
}