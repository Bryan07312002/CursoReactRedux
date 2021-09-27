import React,{useState} from 'react'
import {useEffect} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'



const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [factorial, setFactorial] = useState(1)
    const [paridade, setParidade] = useState("Impar")

    function calcFatorial(n){
        if(n < 0) return -1
        if(n === 0) return 1
        if(n > 9999) return setNumber(9999)
        return calcFatorial(n-1)*n
    }

    function Paridade(){
        var resto = number % 2
        console.log(number % 2)
        if(resto === 0) return "Par"
        if(resto === 1) return "Impar"
    }

    useEffect(function() {
        setFactorial(calcFatorial(number))
    },[number])

    useEffect(function() {
        setParidade(Paridade())
    }, [factorial])
    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercício 01"/>
             <span className="text">Factorial: {factorial}</span>
            <input type="number" value={number} className="input" onChange={e=>setNumber(e.target.value)}/>

            <SectionTitle title="Exercício 02"/>
            <div className="center">
                <span className="text">{paridade}</span>
            </div>
            

        </div>
    )
}

export default UseEffect
