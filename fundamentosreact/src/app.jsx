import React from "react";

import "./app.css"
import Primeiro from "./components/basics/Primeiro";
import ComParametro from "./components/basics/ComParametro";
import Fragments from "./components/basics/Fragments";
import Random from "./components/basics/Random";
import Card from "./components/layout/Card";
import Family from "./components/basics/Family";
import FamilyMembers from "./components/basics/FamilyMembers";
import ListStudents from "./components/repeat/ListStudents";
import Table from "./components/repeat/Table";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunication/DiretaPai";
import IndiretaPai from "./components/comunication/IndiretaPai";
import Input from "./components/formulario/forms";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";
import Calculadora from "./components/calculadora/Calculadora";

export default function app(){
    return(
        <div className="App">
            <h1> Fundamentos React! </h1>
            <div className="Cards">
                <Card titulo="Primeiro" color="#0f0">
                    <Primeiro />
                </Card>

                <Card titulo="Fragments">
                    <Fragments />
                </Card>

                <Card titulo="Com Parametros">
                    <ComParametro titulo="Título" subtitulo="Subtítulo" />
                </Card>
                
                <Card titulo="Exemplo de Card">
                    <Random max="10" min="0" />
                </Card>

                <Card titulo="Family">
                    <Family sobrenome="Becker" >
                        <FamilyMembers nome="Bryan" />
                        <FamilyMembers nome="Mariana" />
                        <FamilyMembers nome="Carlos" />
                    </Family>
                </Card>

                <Card titulo="Repeat">
                    <ListStudents />
                </Card>

                <Card titulo="Products Table">
                    <Table />
                </Card>

                <Card titulo="Renderização Condicional">
                    <ParOuImpar numero={5} />
                    <UsuarioInfo usuario={{nome:"Bryan"}}/>
                    <UsuarioInfo />
                </Card>

                <Card titulo="Comunicaçõa Direta">
                    <DiretaPai />
                </Card>

                <Card titulo="Comunicação Indireta">
                    <IndiretaPai />
                </Card>

                <Card titulo="Input">
                    <Input></Input>
                </Card>

                <Card titulo="Contador">
                    <Contador />
                </Card>

                <Card titulo="Mega">
                    <Mega />
                </Card>

                <Card titulo="Calculadora">
                    <Calculadora />
                </Card>
            </div>
        </div>
    );
};