import axios from "axios";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import QuestionListItem from "../question_list_item/QuestionListItem";
import "./DashboardDetailPage.css"

const DashboardDetailPage = (props) => {

const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [questions, setQuestions] = useState([]);
const [formTitle, setFormTitle] = useState('');
const [formDescription, setFormDescription] = useState('');
const [questionsPublishedRightNow, setQuestionsPublishedRightNow] = useState(0);
const params = useParams();

const handleChangeTitle = (event) => {
    setFormTitle(event.target.value);
    }
const handleChangeDescription = (event) => {
    setFormDescription(event.target.value)
    }
const handleSubmit = (e) => {
     e.preventDefault();
    if ((formTitle.length === 0) || (formDescription.length == 0)) {
        return;
    }
    console.log("Quieres publicar la pregunta con título:")
    console.log(formTitle);
    console.log("...y descripción:");
    console.log(formDescription);
    const httpRequestBody = { title: formTitle, description: formDescription }
    axios.post('http://raspi:8081/api/v1/dashboards/' + params.idDashboard + '/questions', httpRequestBody).then(response => {
         setQuestionsPublishedRightNow(old => { return old + 1 })
    })
    // Vaciar el formulario
    setFormTitle('');
    setFormDescription('');
}
        

useEffect(() => {
    axios.get('http://raspi:8081/api/v1/dashboards/' + params.idDashboard).then(response => {
    setTitle(response.data.title);
    setDescription(response.data.description);
    setQuestions(response.data.questions);
    })
    }, [questionsPublishedRightNow])

 return <div data-cy='issue22body'>
            <h1 data-cy='issue22title'>{title}</h1>
            <p data-cy='issue22description'>{description}</p>
            <div data-cy='questionsList'>
            { questions.map((q) => { return <QuestionListItem question={q} /> }) }
            </div>
            
            <div data-cy='formContainer' className='formContainer'>
                <h4>¿No encuentras lo que buscas? Haz una pregunta a la comunidad</h4>
                <form data-cy='newQuestionForm' onSubmit={handleSubmit}>
                <input data-cy='newQuestionTitle' placeholder='Título de la pregunta' value={formTitle} onChange={handleChangeTitle}></input><br/>
                <input data-cy='newQuestionDescription' placeholder='Texto de la pregunta' value={formDescription} onChange={handleChangeDescription}></input><br/>
                <button data-cy='postDataButton'>Preguntar</button>
             </form>
            </div>
        </div>
}
export default DashboardDetailPage;