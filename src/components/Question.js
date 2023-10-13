import Option from "./Option";

function Question(props) {
  console.log(props.question);
  return (
    <div>
      <h4>{props.question.question}</h4>
      <Option
        question={props.question}
        dispatch={props.dispatch}
        answer={props.answer}
      />
    </div>
  );
}

export default Question;
