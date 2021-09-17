import {useState} from "react";
import "./contador.css";
import Display from "./Display";
import Passo from "./Passo";
import Button from "./Button";
export default function IndiretaPai(props){
    const[numero,setNumero] = useState(0);
    const[passo,setPasso] = useState(0);

    function Change(e){
        var passof = parseInt(e.target.value)
        if(!passof){
            passof = 0
        }
        setPasso(passof)
    }

    function Somar(){
        setNumero(numero + passo)
    }

    function Subtrair(){
        setNumero(numero - passo)
    }

    return(
        <div className="contador">
            <h2>Contador</h2>
            <p><Display /></p>
            <p><passo /></p><br />
            <Button />
        </div>        
    )
}