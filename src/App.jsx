import React from "react";
import './App.css'

import UsuarioInfoIfElse from "./condicional/UsuarioInfoIfElse";
import UsuarioInfo from "./condicional/UsuarioInfo";
import ParOuImpar from "./condicional/ParOuImpar";
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import DiretaPai from "./components/comunicacao/DiretaPai";

export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">

            <Card  titulo="#09 - Comunicação Direta" color="#D5CABD">
                <DiretaPai/>
            </Card>

            <Card  titulo="#08 - Renderização Condicional" color="#982395">
                <ParOuImpar numero={20}></ParOuImpar>
                <UsuarioInfo usuario={{nome: 'Rômulo'}}></UsuarioInfo>
                <UsuarioInfoIfElse></UsuarioInfoIfElse>
            </Card>

            <Card titulo="#07 - Desafio" color="#ff007f">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#06 - Repetição" color="#005073">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Componente com Filhos" color="#ffcc5c">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Pedro"/>
                    <FamiliaMembro nome="Ana"/>
                    <FamiliaMembro nome="Gustavo"/>
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#beabea">
                <Aleatorio
                    min = {1}
                    max = {50}/>
            </Card>

            <Card titulo="#03 - Fragmento" color="#2f95f0">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parâmetro" color="#9be24a">
                <ComParametro
                    titulo="Situação do aluno"
                    aluno="Pedro Silva"
                    nota={9.3} />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#ffbdbd">
                <Primeiro />
            </Card>
        </div>
    </div>
)
