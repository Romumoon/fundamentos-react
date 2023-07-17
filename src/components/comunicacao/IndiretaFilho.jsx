import React from "react";

export default props => {

    return (
        <div>
            <div>Filho</div>
            <button onClick={function (e) {
                props.quandoClicar("Rômulo", 21, true)
            }}>
                Fornecer Informações
            </button>
        </div>
    )
}