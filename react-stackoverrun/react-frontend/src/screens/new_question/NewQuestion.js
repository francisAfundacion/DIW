import { useParams } from "react-router-dom"

const NewQuestion = (props) => {
    const params = useParams()
    return <div>
        <footer>
            <p data-cy='footerCopyright'>©Francisco Gómez Segura</p>
            <p data-cy='footerTextDebug'>Desde aquí puedes crear una nueva pregunta para el dashboard con ID: {params.dashboardId}</p>
        </footer>
    </div>
}
export default NewQuestion