import questions from './data';
import { Question } from './Question';

export const QuestionList = () => {
  return (
    <>
      {questions.map((question) => <Question key={ question.id } { ...question } />)}
    </>
  )
}
