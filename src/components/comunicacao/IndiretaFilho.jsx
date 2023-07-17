import React from "react";

export default props => {

    const geradorIdade = () => parseInt(Math.random() * 20 + 50)
    const geradorNerd = () => Math.random() > 0.5

    return (
        <div>
            <div>Filho</div>
            <button onClick={function (e) {
                props.quandoClicar("Rômulo", geradorIdade, geradorNerd)
            }}>
                Fornecer Informações
            </button>
        </div>
    )
}