import SimpleCounter from "../components/simple_counter/SimpleCounter"
import SimpleColorPicker from "../components/simple_color_picker/SimpleColorPicker"
import SimpleColorLooper from "../components/simple_color_looper/SimpleColorLooper"
import SimpleStyleChanger from "../components/simple_style_changer/SimpleStyleChanger"
import TimestampChecker from "../components/timestamp_checker/TimestampChecker"
import { useState, useEffect } from "react"
import DashboardListItem from "../components/dashboard_list_item/DashboardListItem"
import QuestionListItem from "../components/question_list_item/QuestionListItem"

import axios from "axios"
const Examples =  () => {
    const [dashboards, setDashboards] = useState([]);

    useEffect(() => {
        axios.get('http://raspi:8081/api/v1/dashboards').then(response => {
    
          // Cuando recibimos la respuesta del API REST,
          // la almacenamos en nuestro estado
          console.log(response.data);
          setDashboards(response.data);
        })
      }, [])

    
    return(
        <>
            <div>
                <h2 data-cy='pageHeader'>Otros ejemplos</h2>
                <div data-cy='issue3div'>
                <h1>Ejercicio 3</h1>
                <SimpleCounter />
                </div>
                <div data-cy='issue4div'>
                <h1>Ejercicio 4</h1>
                <SimpleColorPicker />
                </div>
                <div data-cy='issue5div'>
                <h1>Ejercicio 5</h1>
                <SimpleColorLooper />
                </div>
                <div data-cy='issue6div'>
                <h1>Ejercicio 6</h1>
                <SimpleStyleChanger />
                </div>
                <div data-cy='issue14div'>
                    <h1>Ejercicio 14</h1>
                    <TimestampChecker />
                </div>
                <div data-cy='issue15div'>
                    <h1>Ejercicio 15</h1>
                    <TimestampChecker formatDate={true} />
                </div>
                <div data-cy='issue17div'>
                <h1>Ejercicio 17</h1>
                <p>Se han recuperado {dashboards.length} dashboards</p>
                </div>
                <div data-cy='issue18div'>
                     <h1>Ejercicio 18</h1>
                     <p>Aquí se muestra un DashboardListItem de ejemplo</p>
                    <DashboardListItem dashboard={{id: 0, title: "Title", description: "Contenido mock"}} />
                </div>
                <div data-cy='issue21div'>
                    <h1>Ejercicio 21</h1>
                    <p>Aquí se muestra un QuestionListItem de ejemplo</p>
                    <QuestionListItem question={{question_id: 0, title: "Title", description: "Contenido mock"}} />
                </div>


            </div>

        </>
    )
}
export default Examples