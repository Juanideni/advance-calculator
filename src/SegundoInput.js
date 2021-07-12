import { useState } from "react";

function SegundoInput(){
    
    return(
        <>
        <div>
            <label>Ingrese el segundo numero:</label><input type="number" id="primer-numero" className="number-inputs"></input>
            <button>Clear</button>
        </div>
        </>
        )
}
export default SegundoInput;
