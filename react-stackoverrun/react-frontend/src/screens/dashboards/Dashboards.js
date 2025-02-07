import { useEffect, useState } from "react";
import axios from "axios"
import { useParams } from "react-router-dom";
import DashboardListItem from "../dashboard_list_item/DashboardListItem";


 

const Dashboards = (props) => {
    // ruta api => http://raspi:8083/api/v2/dashboards
    const params = new useParams()
    const [dashboards, setDashboards] = useState([])

    useEffect(() => {
        axios.get('http://raspi:8083/api/v2/dashboards').then(response => {
          setDashboards(response.data);

        })
      }, [])
    
    return <div>
            <div data-cy='listOfDashboards'>
                { dashboards.map((d) => { return <DashboardListItem dashboard={d}/> }) }
            </div>
        <footer>
            <p data-cy='footerCopyright'>©Francisco Gómez Segura</p>
            <p data-cy='footerTextDebug'>Estás visitando la pregunta con ID: {params.questionId}, que pertenece al dashboard con ID: {params.dashboardId}</p>
        </footer>   
    </div>
}
export default Dashboards