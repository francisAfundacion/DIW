const AnswerListItem = (props) => {
    <div className='answer-li' key={props.answer.answer_id}>
         <p>{props.answer.description}</p>
    </div>
} 
export default AnswerListItem