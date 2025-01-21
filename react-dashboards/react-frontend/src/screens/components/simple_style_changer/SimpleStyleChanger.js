import { useState } from "react"
import "./estilos.css"
const SimpleStyleChanger = () => {
  const [currentTextStyleCss, setCurrentTextStyleCss] = useState("simpleStyleChangerStyleNormal");
  const lista_estilos = ['simpleStyleChangerStyleNormal', 'simpleStyleChangerStyleLighter', 'simpleStyleChangerStyleBold']
  return <div data-cy='issue6div'>
            <p className={currentTextStyleCss} >
                Los peces son parte del reino animal
            </p>
            <button data-cy='issue6button' onClick={() => {
                let num_aleatorio = Math.floor(Math.random() * 3)
                setCurrentTextStyleCss(estilo_antiguo => {
                    while (estilo_antiguo === lista_estilos[num_aleatorio]){
                        num_aleatorio = Math.floor(Math.random() * 3)
                    } 
                    return lista_estilos[num_aleatorio]
                })
            }}>Cambiar estilo</button>
    </div>
}
export default SimpleStyleChanger