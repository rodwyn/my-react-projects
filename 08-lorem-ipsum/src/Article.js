export const Article = ({ text }) => {
  return (
    <article className='lorem-text'>
      {
        text.map((item, index) => <p key={ index }>{ item }</p>)
      }
    </article>
  )
}
