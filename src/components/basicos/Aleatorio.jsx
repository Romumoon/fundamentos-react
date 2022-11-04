import React from "react";

export default (props) => {

    const { min, max} = props

    const randomNumber = 
        parseInt(Math.random() * (max - min + 1)) + min

    return (
        <div>
            <h2>Número Aleatório</h2>
            <p>
                <strong>Valor mínimo: {min}</strong>
            </p>
            <p>
                <strong>Valor máximo: {max}</strong>
            </p>
            <p>
                <strong>Valor aleatório: {randomNumber}</strong>
            </p>
        </div>
    )
}
