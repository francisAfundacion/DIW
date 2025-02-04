import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import AnswerListItem from "../components/answer_list_item/AnswerListItem";


const QuestionDetailPage = (props) => {
    /*
    Añade un nuevo estado (por ejemplo, answersPublishedRightNow) con valor por defecto 0


Asegúrate de que el useEffect en QuestionDetailPage.js reacciona ante ese estado

Modifica ese estado (incrementándolo en 1) si la petición POST para publicar una respuesta tiene éxito (.then)
    */
    const [answersPublishedRightNow, setAnswerPublishedRightNow] = useState(0);
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
        const httpRequestBody = { description: formDescription }
        axios.post('http://raspi:8081/api/v1/dashboards/' + params.idDashboard + '/questions/' + params.idQuestion + '/answers', httpRequestBody).then(response => {
            console.log("LLEGO PETICION POST")
            console.log(response)
            setAnswerPublishedRightNow(old => { return old + 1 })
        })
        setFormDescription('');
    }

    useEffect(() => {
        console.log( "params id_dash => " + params.idDashboard);
        console.log( "params id_Question => " + params.idQuestion);
        console.log(params.idQuestion);
        axios.get('http://raspi:8081/api/v1/dashboards/' + params.idDashboard + '/questions/' + params.idQuestion).then(response => {
           console.log("LLEGO A HACER LA PETICION GET DE PREGUNTA Y RESPUESTA POR ID");
            console.log(response.data);
            setQuestionTitle(response.data.question_title);
            setQuestionDescription(response.data.question);
            console.log("antes sETANSWES => AQUI MUY IMP")
            setAnswers(response.data.answers);
            console.log("VISUALIZO DIRECTAMENTE LOS ANSWERS => " + response.data.answers)
            console.log("JSON ENTERO DE LOS ANSWRS EN EL GET");
            console.log(answers);
        })
    }, [setAnswerPublishedRightNow])

    console.log(questionTitle)
    console.log(questionDescription);
    console.log(answers);
    return <div data-cy='issue23body'>
        <h1 data-cy='issue23title'>{questionTitle}</h1>
        <p data-cy='issue23description'>{questionDescription}</p>
        <div data-cy='answersList'>
            {answers.map((a) => { 
                console.log("VISUALIZO RESPUESTA" + a);
                console.log("ESTOY EN MAP");
                console.log(a.answer_id);
                return <AnswerListItem answer={a} />
                })}
        </div>
        <p data-cy='noAnswers'>{answers.length === 0 ? "¡Vaya! No hay respuestas" : ""}</p>
        <div data-cy='formContainer' className='formContainer'>
            <h4>¿Conoces la respuesta?</h4>
            <form data-cy='newAnswerForm' onSubmit={handleSubmit}>
                <input data-cy='newAnswerDescription' placeholder='Texto de la respuesta' value={formDescription} onChange={handleChangeDescription}></input><br />
                <button data-cy='postDataButton'>Escribir respuesta</button>
            </form>
        </div>
    </div>
}
export default QuestionDetailPage;
