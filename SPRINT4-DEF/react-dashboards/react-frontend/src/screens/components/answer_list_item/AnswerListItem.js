import "./AnswerListItem.css"
const AnswerListItem = (props) => {
    console.log("ESTIY EN COMPONENTE ANSWERLISTITEM");
    console.log(props)
    console.log("visualizo " + props.answer.answer_id);
    console.log(props.answer_id);
    return <div className='answer-li' key={props.answer.answer_id}>
         <p>{props.answer.description}</p>
    </div>

} 
export default AnswerListItem