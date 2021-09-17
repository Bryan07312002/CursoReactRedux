import React from "react";
import table from "../../data/table";
import "./Table.css";

export default function Table(porps){
    function TableLine(){
        return table.map((product,i) => {
            return(
                <tr className={i % 2 === 0 ? 'par' : ''} key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>R$ {product.price}</td>
                </tr>
            )
        })
    }
    return(
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Price</td>
                    </tr>
                    
                    {TableLine()}
                </tbody>
            </table>
        </div>
    )
}