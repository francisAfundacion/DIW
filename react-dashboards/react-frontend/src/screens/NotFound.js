const NotFound = (props) => {
    return (<>
        <h2 data-cy='pageHeader'>No encontrado</h2>
        <p data-cy='pageText'>Disculpa, pero la página que buscas no está o se la han llevado</p>
        <link to="/"></link>
    </>)
}
export default NotFound