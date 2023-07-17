import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";


export default props => {
    
    let [nome, setNome] = useState();
    let [idade, setIdade] = useState();
    let [nerd, setNerd] = useState();

    function fornecerInformacoes(nome, idade, nerd){
        setNome(nome);
        setIdade(idade);
        setNerd(nerd);
    }

    return (
        <div>
            <span>{nome} </span>
            <span>{idade} </span>
            <span>{nerd ? 'Verdadeiro' : 'Falso'}</span>

            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}