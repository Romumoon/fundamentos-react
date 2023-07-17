import React from "react";
import DiretaFilho from "./DiretaFilho"

export default props => {
    return (
        <div>
            <DiretaFilho nome="Rômulo" idade={21} nerd={true}/>
            <DiretaFilho nome="Francisco" idade={20} nerd={true}/>
        </div>
    )
}