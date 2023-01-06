export const Links = ({ links, linksRef, linksContainerRef }) => {
  return (
    <div className='links-container' ref={ linksContainerRef }>
      <ul className='links' ref={ linksRef }>
        {
          links.map(({ id, url, text }) => 
          <li key={id}>
            <a href={url}>{text}</a>
          </li>)
        }
      </ul>
    </div>
  )
}
