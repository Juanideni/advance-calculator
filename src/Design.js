import { useState } from "react"


function Design(){
    let [firstNumber,setFirstNumber] = useState(0)
    let [secondNumber, setSecondNumber] = useState(0)
    

    function inputFirstNumber(props){
       setFirstNumber(Number(props.target.value))
    }
    function inputSecondNumber(props){
        setSecondNumber(Number(props.target.value))
    }

    function clearFirstInput(){
        setFirstNumber(0)
    }
    function clearSecondInput(){
        setSecondNumber(0)
    }


    return(
        <>
        <div className="inputs">
            <div className="first-input">
            <label>Ingrese el primer numero:</label>
            <input type="number" id="primer-numero" className="number-inputs" value={firstNumber} onInput={inputFirstNumber}></input>
            <button onClick={clearFirstInput} className="button-clear">Clear</button>
            </div>
            <div className="second-input">
            <label>Ingrese el segundo numero:</label><input type="number" id="primer-numero" className="number-inputs" value={secondNumber} onInput={inputSecondNumber}></input>
            <button onClick={clearSecondInput} className="button-clear">Clear</button>
            </div>
        </div>
        <div>
            <ul>
            <li><h3>- Suma: <span id="suma">{(firstNumber === null || secondNumber === null) ? "" : firstNumber+"+"+secondNumber+"= "+Number(firstNumber + secondNumber)}</span></h3></li>
            <li><h3>- Resta: <span id="resta">{(firstNumber === null || secondNumber === null) ? "" : firstNumber+"-"+secondNumber+"= "+Number(firstNumber-secondNumber)}</span></h3></li>
            <li><h3>- Multiplicacion: <span id="multiplicacion">{ (firstNumber === null || secondNumber === null) ? "" : firstNumber+"*"+secondNumber+"= "+firstNumber*secondNumber}</span></h3></li>
            <li><h3>- Division: <span id="division">{(firstNumber === null || secondNumber === null) ? "" :
             (secondNumber === 0 && firstNumber === 0) ? "0/0 = Indeterminado" : firstNumber+"/"+secondNumber+ "= " + firstNumber/secondNumber}</span></h3></li>
            <li><h3>- Potencia: <span id="potencia">{ (firstNumber === null || secondNumber === null) ? "" : firstNumber+"^"+secondNumber+"= "+Math.pow(firstNumber, secondNumber)}</span></h3></li>
            <li><h3>- Raiz: <span id="raiz cuadrada">{(firstNumber === null || secondNumber === null) ? "" : 
             (secondNumber === 0) ? "No existe raiz de cero" :  secondNumber+" √"+firstNumber+"= "+Math.pow(firstNumber, (1/secondNumber))}</span></h3></li>
            <li><h3>- Hipotenusa: <span id="hipotenusa">{(firstNumber === null || secondNumber === null) ? "" : 
            "("+firstNumber+")^2 + ("+secondNumber+")^2= "+Number((firstNumber*firstNumber)+(secondNumber*secondNumber))}</span></h3></li>
            </ul>
        </div>
        </>
        )
}
export default Design;