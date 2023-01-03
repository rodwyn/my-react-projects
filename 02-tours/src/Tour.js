import { Paragraph } from "./Paragraph"

export const Tour = ({ image, name, price, info, id, onRemoveTour }) => {
  
  return (
    <article className="single-tour">
      <img src={ image } alt={ name } />
      <footer>
        <div className="tour-info">
          <h4>{ name }</h4>
          <h4 className="tour-price">${ price }</h4>
        </div>
        <Paragraph text={ info } />
        <button className="delete-btn" onClick={ () =>  onRemoveTour(id) }>not interested</button>
      </footer>
    </article>
  )
}
