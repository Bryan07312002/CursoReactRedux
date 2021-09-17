import {useState} from "react";
import "./contador.css";
import Display from "./Display";
import Passo from "./Passo";
import Button from "./Button";
export default function IndiretaPai(props){
    const[numero,setNumero] = useState(0);
    const[passo,setPasso] = useState(1);

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
            <p><Display numero={numero} /></p>
            <p><Passo Change={Change} passo={passo}/></p>
            <p><Button Somar={Somar} Subtrair={Subtrair}/></p>
            {/* <p><Display numero={this.state.numero}/></p>
            <p><Passo /></p><br />
            <Button /> */}
        </div>        
    )
}