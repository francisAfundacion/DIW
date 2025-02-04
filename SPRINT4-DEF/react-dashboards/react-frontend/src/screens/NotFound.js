import { Link } from "react-router-dom"

const NotFound = (props) => {
    return (
        <div data-cy="pageBody">
            <h2 data-cy='pageHeader'>No encontrado</h2>
            <p data-cy='pageText'>Disculpa, pero la página que buscas no está o se la han llevado</p>
            <Link to="/">Inicio</Link>
        </div>
        )
}
export default NotFound