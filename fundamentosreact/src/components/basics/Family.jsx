import React, { cloneElement } from "react";
import FamilyMembers from "./FamilyMembers";

export default function Family(props){
    return(
        <span>
            {
                React.Children.map(props.children,(child,i) => {
                return cloneElement(child,{...props , key: i})
                })
            }
        </span>
    )
}