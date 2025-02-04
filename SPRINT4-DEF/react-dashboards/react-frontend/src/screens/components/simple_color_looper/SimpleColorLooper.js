import { useState } from "react"
import "./SimpleColorLooper.css"
const SimpleColorLooper = () => {
  const rgb_colores =  ['rgb(181, 0, 0)', 'rgb(0, 168, 0)', 'rgb(0, 0, 151)', 'rgb(255, 255, 185)'];
  const [contadorColor, setContadorColor] = useState(0);
  function cambiar_color () {
    setContadorColor(
        contador_antiguo => { 
            console.log(contador_antiguo);
            if (contador_antiguo === rgb_colores.length -1)
               return contador_antiguo = 0
            else
                return contador_antiguo += 1;

        }
    )
  }
  return <div data-cy='issue5div'>
        <p data-cy='issue5text'  style={{color: rgb_colores[contadorColor]}} >Ordenación por selección</p>
        <button data-cy = 'issue5button' onClick={cambiar_color}>Otro color</button>
    </div>
}
export default SimpleColorLooper