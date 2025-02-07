import { useParams } from "react-router-dom";
import "./AnswerListItem.css"

const AnswerListItem = (props) => {
  const params = useParams()

  return <div className='answer-li' key={props.answer.answer_id}>
    <p>{props.answer.description}</p>
  </div>
}

export default AnswerListItem;
