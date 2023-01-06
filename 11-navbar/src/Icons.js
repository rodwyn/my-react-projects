export const Icons = ({ social }) => {
  return (
    <ul className='social-icons'>    
      {
        social.map(({ id, url, icon }) =>
          <li key={id}>
            <a href={url}>{icon}</a>
          </li>)
      }
    </ul>
  )
}
