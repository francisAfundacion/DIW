import "./DashboardListItem.css"
import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const DashboardListItem = (props) => {

  const navigate = useNavigate();
 
  const onClick = () => {
    console.log(props.dashboard.id);
    navigate('/dashboards/'+ props.dashboard.id);
    console.log('clicked');

  }
    
  return <div onClick={onClick} className='dashboard-li' key={props.dashboard.id}>
  <h3>{props.dashboard.title}</h3>
  <p>{props.dashboard.description}</p>
</div>

}

export default DashboardListItem;
