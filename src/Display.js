    import PrimerInput from "./PrimerInput";
    import SegundoInput from "./SegundoInput";

   

    function Display(){
        return(
            <>
            
            <ul>
                <li><h3>- Suma: <span id="suma">0</span></h3></li>
                <li><h3>- Resta: <span id="resta">0</span></h3></li>
                <li><h3>- Multiplicacion: <span id="multiplicacion">0</span></h3></li>
                <li><h3>- Division: <span id="division">0</span></h3></li>
                <li><h3>- Potencia: <span id="potencia">0</span></h3></li>
                <li><h3>- Raiz cuadrada: <span id="raiz cuadrada">0</span></h3></li>
                <li><h3>- Hipotenusa: <span id="hipotenusa">0</span></h3></li>
            </ul>
            </>
        )
    }
    export default Display;