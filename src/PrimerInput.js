import { useState } from "react";



function PrimerInput(){
    
    return(
        <>
        <div>
            <label>Ingrese el primer numero:</label><input type="number" id="primer-numero" className="number-inputs"></input>
            <button>Clear</button>
        </div>
        </>
        )
}
export default PrimerInput;