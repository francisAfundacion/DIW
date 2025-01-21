import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import AnswerListItem from "../components/answer_list_item/AnswerListItem";

const QuestionDetailPage = (props) => {
    const params = useParams();
    const [formDescription, setFormDescription] = useState('');
    const [questionTitle, setQuestionTitle] = useState('');
    const [questionDescription, setQuestionDescription] = useState('');
    const [answers, setAnswers] = useState([])

    const handleChangeDescription = (event) => {
        setFormDescription(event.target.value);
        }
        const handleSubmit = (e) => {
        e.preventDefault();
        if (formDescription.length == 0) {
        return;
        }
        // Vaciar el formulario
        setFormDescription('');
        }
        
    useEffect(() => {
        axios.get('http://raspi:8081/api/v1/dashboards/' + params.idDashboard + '/questions/' + params.idQuestion).then(response => {
        setQuestionTitle(response.data.question_title);
        setQuestionDescription(response.data.question);
        setAnswers(response.data.answers);
        })
        }, [])
        
        return <div data-cy='issue23body'>
                    <h1 data-cy='issue23title'>{questionTitle}</h1>
                    <p data-cy='issue23description'>{questionDescription}</p>
                    <div data-cy='answersList'>
                    { answers.map((a) => { return <AnswerListItem answer={a}/> }) }
                    </div>
                    <p data-cy='noAnswers'>{answers.length === 0 ? "¡Vaya! No hay respuestas" : ""}</p>
                </div>
    }
    export default QuestionDetailPage;
    