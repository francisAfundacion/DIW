import { useState, useEffect } from "react"
import axios from "axios";

const TimestampChecker = (props) => {
    const [time, setTime] = useState(undefined);
    
    useEffect(() => {
        axios.get("http://time.akamai.com").then( response => {
            if (props.formatDate === true) {
                               const timestampInSeconds = parseInt(response.data);
                               const timestampInMillis = timestampInSeconds * 1000;
                               const date = new Date(timestampInMillis);
                               // La siguiente línea imprime la fecha actual así: 7/2/2021, 14:05:07
                               setTime(date.toLocaleString());
                          } else {
                             setTime(response.data);
                           }
                
        })
    }, [])
    
    return <div data-cy='timestampChecker'>
        <p data-cy='title'>A continuación se muestra el timestamp según Akamai:</p>
        <p data-cy='timestamp'>{time}</p>
      </div>
}

export default TimestampChecker;
