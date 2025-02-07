import { Link } from "react-router-dom";
//import '../not-found/.NotFound.css'
import './NotFound.css'

const NotFound = () => {

    return <div data-cy='pageBody'>
        <h1 data-cy='pageHeader'>Oh!</h1>
        <p data-cy='simpleMessage'>La página que buscas no existe </p>
        <Link data-cy='homelink' href="/" className=".Link">Volver a casa</Link>
        <img  src='/images/monkey-face.png'></img>
    </div>
  }
  
  export default NotFound;
  