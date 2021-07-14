import { useState } from "react"


function Design(){
    let [firstNumber,setFirstNumber] = useState()
    let [secondNumber, setSecondNumber] = useState()
    

    function inputFirstNumber(props){
       setFirstNumber(props.target.value)
    }
    function inputSecondNumber(props){
        setSecondNumber(props.target.value)
    }

    function clearFirstInput(){
        setFirstNumber(0)
    }
    function clearSecondInput(){
        setSecondNumber(0)
    }

    

    return(
        <>
        <div>
            <label>Ingrese el primer numero:</label><input type="number" id="primer-numero" className="number-inputs" value={firstNumber} onInput={inputFirstNumber}></input>
            <button onClick={clearFirstInput}>Clear</button>
        </div>
        <div>
            <label>Ingrese el segundo numero:</label><input type="number" id="primer-numero" className="number-inputs" value={secondNumber} onInput={inputSecondNumber}></input>
            <button onClick={clearSecondInput}>Clear</button>
        </div>
        <div>
            <ul>
                <li><h3>- Suma: <span id="suma">{firstNumber+"+"+secondNumber+"= "+Number((firstNumber*1)+(secondNumber *1))}</span></h3></li>
                <li><h3>- Resta: <span id="resta">{firstNumber+"-"+secondNumber+"= "+Number(firstNumber-secondNumber)}</span></h3></li>
                <li><h3>- Multiplicacion: <span id="multiplicacion">{firstNumber+"*"+secondNumber+"= "+firstNumber*secondNumber}</span></h3></li>
                <li><h3>- Division: <span id="division"></span>{firstNumber+"/"+secondNumber+"= "+firstNumber/secondNumber}</h3></li>
                <li><h3>- Potencia: <span id="potencia"></span>{firstNumber+"^"+secondNumber+"= "+Math.pow(firstNumber, secondNumber)}</h3></li>
                <li><h3>- Raiz cuadrada: <span id="raiz cuadrada">{firstNumber+" √"+secondNumber+"= "+Math.pow(firstNumber, (1/secondNumber))}</span></h3></li>
                <li><h3>- Hipotenusa: <span id="hipotenusa">{"("+firstNumber+")^2 + ("+secondNumber+")^2= "+Number((firstNumber*firstNumber)+(secondNumber*secondNumber))}</span></h3></li>
            </ul>
        </div>
        </>
        )
}
export default Design;