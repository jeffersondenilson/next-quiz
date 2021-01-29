import Widget from '../Widget';
import FeedbackMark from '../FeedbackMark';

export default function ResultWidget({ answers }){
  return (
    <Widget>
      <Widget.Header>
        <h2>Resultado</h2>
      </Widget.Header>
      <Widget.Content>
        <h3>
          {`Você acertou ${answers.filter((a) => a).length} de ${answers.length}`}
        </h3>

        <p>Suas respostas:</p>

        { answers.map((answer, index)=>{
          return (
            <FeedbackMark as="span" isCorrect={answer}>
              {answer ? <span>&#10004;</span> : <span>&#10006;</span>}
            </FeedbackMark>
          );
        })}
      </Widget.Content>
      {/*<span style={{ fontWeight: 'bold', fontSize: '1.1em', textAlign: 'center', verticalAlign: 'center' }}>{`#${index+1}`}</span>*/}
    </Widget>
  );
}