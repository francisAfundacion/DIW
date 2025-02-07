import "./QuestionListItem.css"
import { useNavigate } from 'react-router-dom';

const QuestionListItem = (props) => {
  const navigate = useNavigate();
  
  
  const onClick = () => {
    console.log("ESTOY EN ONCLICK DE QUESTIONLISTITEM");
    console.log(props.question.question_id)
    navigate('questions/'+props.question.question_id)
  }

  return <div onClick={onClick} className='question-li' key={props.question.question_id}>
    <h3>{props.question.title}</h3>
    <p>{props.question.description}</p>
  </div>
}

export default QuestionListItem;
