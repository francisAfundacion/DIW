import { useParams } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react";
import AnswerListItem from "../asnwer_list_item/AnswerListItem";


const QuestionDetail = (props) => {
    const params = useParams();
    const [questionTitle, setQuestionTitle] = useState('');
    const [question, setQuestion] = useState('');
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        axios.get('http://raspi:8082/api/v2/dashboards/' + params.dashboardId + '/questions/' + params.questionId).then(response => {
          setQuestionTitle(response.data.question_title);
          setQuestion(response.data.question);
          setAnswers(response.data.answers);
        })
      }, [])
    
  
    return <div>
            <h1 data-cy="header">{questionTitle}</h1>
            <h3 data-cy="description">{question}</h3>
            <div data-cy="answers_list">
            { answers.map( a => { return <AnswerListItem answer={a} /> }) }
            </div>
            <footer>
            <p data-cy='footerCopyright'>©Francisco Gómez Segura</p>
            </footer>
    </div>
}
export default QuestionDetail