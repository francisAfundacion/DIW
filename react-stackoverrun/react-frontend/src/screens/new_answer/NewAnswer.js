import { useParams } from "react-router-dom"

const NewAnswer = (props) => {
    const params = useParams()
    return <div>
        <footer>
            <p data-cy='footerCopyright'>©Francisco Gómez Segura</p>
            <p data-cy='footerTextDebug'>Desde aquí puedes crear una nueva respuesta para la pregunta con ID: {params.questionId}, que pertenece al dashboard con ID: {params.dashboardId}</p>
        </footer>
    </div>
}
export default NewAnswer