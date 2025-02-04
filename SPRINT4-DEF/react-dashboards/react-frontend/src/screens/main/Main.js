
import { Link, useNavigate } from "react-router-dom"
import DashboardListItem from "../components/dashboard_list_item/DashboardListItem"
import { useState, useEffect } from "react"
import axios from "axios"
import "./Main.css"

const Main  = (props) => { 
    const [dashboards, setDashboards] = useState([])
    useEffect(() => {
        document.title = 'Página 1';
        axios.get('http://raspi:8081/api/v1/dashboards').then(response => {
          setDashboards(response.data);
        })
      }, [])
      
    return <div data-cy='issue3body'>
    <h2 data-cy='pageHeader'>
        Principal
    </h2>
    <footer>
    <div className='footer-section'>
        <h3>Enlaces Link</h3>
        <ul>
        <li><Link to='/about'>Acerca de</Link></li>
        <li><Link to='/simpleExamples'>Ejemplos</Link></li>
        </ul>
    </div>
    <div className='footer-section'>
            <h3>Enlaces href</h3>
        <ul>
            <li><a href='/about'>Acerca de</a></li>
             <li><a href='/simpleExamples'>Ejemplos</a></li>
        </ul>
    </div>
    <h2>Dashboards</h2>

    <div data-cy='dashboardsList'>
        { dashboards.map((d) => { return <DashboardListItem dashboard={d}/> }) }
</div>
</footer>
</div>  
}
    


export default Main;