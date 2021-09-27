import React,{useState,useRef,useEffect} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from "../../components/layout/SectionTitle"

const UseRef = (props) => {
    function merge(s1,s2){
        //nao funfou n sei pq
    }

    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")

    const count = useRef(0)
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    useEffect(() => {
        count.current = count.current + 1
        myInput2.current.focus()
        merge()
    }, [value1])

    useEffect(() => {
        count.current = count.current + 1
        myInput1.current.focus()
        merge()
    }, [value2])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title="Exercício 01"/>
            <div className="center">
                <span className="text">Valor:{merge(value1,value2)}[<span className="text red">{count.current}</span>]</span>
                <input className="input" type="text" ref={myInput1} value={value1} onChange={e=>setValue1(e.target.value)}/>
            </div>
            <SectionTitle title="Exercício 02"/>
            <div className="center">
                <input type="text" className="input" ref={myInput2} value={value2} onChange={e => setValue2(e.target.value)}/>
            </div>
        </div>
    )
}

export default UseRef
