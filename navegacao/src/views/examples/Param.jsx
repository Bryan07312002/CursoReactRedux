import React from 'react'
import { useParams } from 'react-router'

const Param = porps => {
    const { id } = useParams()
    return(
        <div className="Param">
            <h1>Param</h1>
            <p>Valor: {id}</p>
        </div>
    )
}

export default Param