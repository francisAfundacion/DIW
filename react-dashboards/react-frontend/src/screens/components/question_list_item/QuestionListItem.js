import { useNavigate } from 'react-router-dom';
import "./QuestionListItem.css"
const QuestionListItem = (props) => {
 const navigate = useNavigate();

 const onClick = () => {
 // Esto navega a una URL que todavía no hemos implementado...
 // TO-DO: Implementar detalle de pregunta (lista de respuestas)
 // Lo haremos en un par de tareas
 navigate('questions/'+ props.question.question_id);
 }
 return <div onClick={onClick} className='question-li' key={props.question.question_id}>
 <h3>{props.question.title}</h3>
 <p>{props.question.description}</p>
 </div>
}
export default QuestionListItem;