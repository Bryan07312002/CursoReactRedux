import React from "react";
import alunos from "../../data/alunos";

export default function ListStudents(props){
    const list = alunos.map((aluno) =>{
        return(
            <li key={alunos.id}>
                {aluno.id}) {aluno.nome} - {aluno.nota}
            </li>
        )
    })

    return(
        <div>
            {list}
        </div>
    )
}