import React from "react";
import "./Card.css";

export default function Card(props) {
    const style = {
        backgroundColor: props.color || "red",
        borderColor:props.color || "red"
    }
    return(
        <div className="Card" style={style}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">
                { props.children }
            </div>
        </div>
    )
}