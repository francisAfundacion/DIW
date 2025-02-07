import "./DashboardListItem.css"
import { useNavigate } from 'react-router-dom';

const DashboardListItem = (props) => {
  const navigate = useNavigate();
  
  
  const onClick = () => {
    navigate('/dashboards/'+ props.dashboard.id)
    console.log("entro en dashboard con id  "+ props.dashboard.id)
  }

  return <div onClick={onClick} className='dashboard-li' key={props.dashboard.id}>
    <h3>{props.dashboard.title}</h3>
    <p>{props.dashboard.description}</p>
  </div>
}
export default DashboardListItem;
