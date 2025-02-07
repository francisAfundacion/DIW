import { useParams } from "react-router-dom"
import QuestionListItem from "../question_list_item/QuestionListItem";
import { useEffect, useState } from "react";
import axios from "axios"

const DashboardDetail = (props) => {
    const params = useParams();
    const [dashboardTitle, setDashboardTitle] = useState('');
    const [dashboardDescription, setDashboardDescription] = useState('');
    const [questions, setQuestions] = useState([]);
    const [newPageOlderThan, setNewPageOlderThan] = useState('');

    useEffect(() => {
        //http://raspi:8083/api/v2/dashboards
        axios.get('http://raspi:8083/api/v2/dashboards/' + params.dashboardId + '?page_size=5&older_than='+ newPageOlderThan).then(response => {
          setDashboardTitle(response.data.title);
          setDashboardDescription(response.data.description);
          const newQuestions = questions.concat(response.data.questions);
          setQuestions(newQuestions);

         })
      }, [newPageOlderThan])

      const onClickLoadMore = (event) => {
        const lastQuestion = questions[questions.length - 1];
        setNewPageOlderThan(lastQuestion.created_at);
      }
      
    
    return <div>
            <h1 data-cy="header">{dashboardTitle}</h1>
            <h3 data-cy="description">{dashboardDescription}</h3>
            <div data-cy="list_of_questions">
              { questions.map( q => { return <QuestionListItem question={q} /> }) }
            </div>
            <footer>
            <button data-cy='loadMoreButton' onClick={onClickLoadMore}>Cargar más elementos</button>
            <p data-cy='footerCopyright'>©Francisco Gómez Segura</p>
            <p data-cy='footerTextDebug'>Aquí está el dashboard con ID: {params.dashboardId}</p>
            </footer>
        </div>
}
export default DashboardDetail