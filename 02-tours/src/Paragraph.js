import { useState } from "react";

export const Paragraph = ({ text }) => {
  const [readMore, setReadMore] = useState(true);

  return (
    <>
      <p>
        { readMore? `${ text.substring(0, 200)}...` :text }
        <button onClick={ () =>  setReadMore(!readMore)}>{ readMore ? 'read more' : 'read less'}</button>
      </p>
    </>
  )
}
