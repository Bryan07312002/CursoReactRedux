import React,{useContext} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import DataContext from '../../data/DataContext'
import SectionTitle from '../../components/layout/SectionTitle'
import { AppContext } from '../../data/Store'

const UseContext = (props) => {

    const context = useContext(DataContext)

    function AddNumber(delta){
        context.setState({...context.state, number:context.state.number + delta})
    }

    const {number,text,setNumber} = useContext(AppContext)
    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <SectionTitle title="exercício 01" />
            <div className="center">
                <span className="text">{context.state.text}</span>
                <span className="text">{context.state.number}</span>
            </div>

            <div className="center">
                <button className="btn" onClick={() => AddNumber(-1)}>-1</button>
                <button className="btn" onClick={() => AddNumber(+1)}>+1</button>
            </div>

            <SectionTitle title="exercício 02" />
            <div className="center">
                <span className="text">{text}</span>
                <span className="text">{number}</span>
                <div>
                    <button className="btn" onClick={()=>setNumber(number+1)}>+1</button>
                    <button className="btn" onClick={()=>setNumber(number-1)}>-1</button>
                </div>
            </div>

        </div>
    )
}

export default UseContext
