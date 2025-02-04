import { useState } from "react"
import "./SimpleColorPicker.css"
const SimpleColorPicker = () => {
  const [backgroundColorCss, setBackgroundColorCss] = useState("");

  return <div data-cy='issue4div'>
            <div data-cy='issue4color'  className={"FatherDiv " + backgroundColorCss}>
                <button data-cy='firstButton' onClick= { () => {setBackgroundColorCss("FirstColorRed")} } >Primer color</button>
                <button data-cy='secondButton'  onClick={ () => {setBackgroundColorCss("SecondColorGreen")}}>Segundo color</button>
                <button data-cy='thirdButton'  onClick={ () => {setBackgroundColorCss("ThirdColorBlue")}} >Tercer color</button>
            </div>

    </div>
}
export default SimpleColorPicker