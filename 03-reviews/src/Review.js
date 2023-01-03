import { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

export const Review = () => {
  const [index, setIndex] = useState(0);
  const { image, job, name, text } = people.at(index);

  const prevPerson = () => setIndex( index => checkNumber(index - 1) );
  const nextPerson = () => setIndex( index => checkNumber(index + 1) );
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    
    if (randomNumber === index) {
      randomNumber = index + 1;
    }

    setIndex(checkNumber(randomNumber));
  };

  const checkNumber = (number) => {
    return number > people.length - 1
      ? 0
      : number < 0
      ? people.length - 1 
      : number
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={ image } alt={ name } className="person-img" />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{ name }</h4>
      <p className="job">{ job }</p>
      <p className="info">{ text }</p>
      <div className="button-container">
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
        <button className="random-btn" onClick={randomPerson}>surprise me</button>
    </article>
  )
}
