import { useState } from "react"


function PrimerInput(){
    let [firstNumber,setFirstNumber] = useState()
    function inputFirstNumber(props){
        setFirstNumber(firstNumber = props.target.value)
    }
    return(
        <>
        <div>
            <label>Ingrese el primer numero:</label><input type="number" id="primer-numero" className="number-inputs" value={firstNumber} onInput={inputFirstNumber}></input>
            <button>Clear</button>
        </div>
        </>
        )
}
export default PrimerInput;