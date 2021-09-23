import React,{useState} from "react";
import "./Calculadora.css"

export default function Calculadora(){

    const[resultado,setResultado] = useState("")

    function Um(e){
        setResultado(resultado + "1")
    }
    function Dois(e){
        setResultado(resultado + "2")
    }
    function Tres(e){
        setResultado(resultado + "3")
    }
    function Quatro(e){
        setResultado(resultado + "4")
    }
    function Cinco(e){
        setResultado(resultado + "5")
    }
    function Seis(e){
        setResultado(resultado + "6")
    }
    function Sete(e){
        setResultado(resultado + "7")
    }
    function Oito(e){
        setResultado(resultado + "8")
    }
    function Nove(e){
        setResultado(resultado + "9")
    }
    function Zero(e){
        setResultado(resultado + "0")
    }
    function Soma(e){
        setResultado(resultado + "+")
    }
    function Subtracao(e){
        setResultado(resultado + "-")
    }
    function Divisao(e){
        setResultado(resultado + "/")
    }
    function Multiplicacao(e){
        setResultado(resultado + "*")
    }
    function Igualdade(e){
        setResultado(parseInt(resultado))
    }
    return(
        <div id="Calculadora">
            <input value={resultado}/>
            <table>
                <tbody>
                    <tr>
                        <td><button onClick={Um}>1</button></td>
                        <td><button onClick={Dois}>2</button></td>
                        <td><button onClick={Tres}>3</button></td>
                        <td><button onClick={Soma}>+</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={Quatro}>4</button></td>
                        <td><button onClick={Cinco}>5</button></td>
                        <td><button onClick={Seis}>6</button></td>
                        <td><button onClick={Subtracao}>-</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={Sete}>7</button></td>
                        <td><button onClick={Oito}>8</button></td>
                        <td><button onClick={Nove}>9</button></td>
                        <td><button onClick={Divisao}>/</button></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><button onClick={Zero}>0</button></td>
                        <td><button onClick={Igualdade}>=</button></td>
                        <td><button onClick={Multiplicacao}>*</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}