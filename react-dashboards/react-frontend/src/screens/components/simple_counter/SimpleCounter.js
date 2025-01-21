import { useState, useEffect } from "react"

const SimpleCounter = () => {
  const [number, setNumber] = useState(0);
  useEffect(()=>{
    document.title = "Estado: " + number; 
 }, [number])


  return <div>
      <p>Estado: {number}</p>
      <button data-cy='issue3button' onClick={ () => {setNumber(number+1) }}>Incrementar</button>
    </div>
}
export default SimpleCounter