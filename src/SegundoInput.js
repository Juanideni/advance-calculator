import { useState } from "react";

function SegundoInput(){
    let [secondNumber, setSecondNumber] = useState()
    
    function inputSecondNumber(props){
        setSecondNumber(secondNumber = props.target.value)
    }
   
    return(
        <>
        <div>
            <label>Ingrese el segundo numero:</label><input type="number" id="primer-numero" className="number-inputs" value={secondNumber} onInput={inputSecondNumber}></input>
            <button>Clear</button>
        </div>
        </>
        )
}
export default SegundoInput;
