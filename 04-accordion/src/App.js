import { QuestionList } from './QuestionList';

export const App = () => {
  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          <QuestionList />
        </section>
      </div>
    </main>
  )
}
