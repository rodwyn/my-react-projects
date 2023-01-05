import { useEffect, useState } from "react";
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'

export const Article = ({ persons }) => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1
      if (index < 0) {
        index = persons.length - 1
      }
      return index
    })
  };
  
  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1
      if (index > persons.length - 1) {
        index = 0
      }
      return index
    })
  };

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1
        if (index > persons.length - 1) {
          index = 0
        }
        return index
      })
    }, 5000)
    return () => {
      clearInterval(slider)
    }
  }, [index])

  return (
    <div className='section-center'>
      {
        persons.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          let position = 'nextSlide';

          if (personIndex === index) {
            position = 'activeSlide'
          }

          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === persons.length - 1)
          ) {
            position = 'lastSlide'
          }

        return (
          <article className={position} key={id}>
            <img src={image} alt={name} className='person-img' />
            <h4>{name}</h4>
            <p className='title'>{title}</p>
            <p className='text'>{quote}</p>
            <FaQuoteRight className='icon' />
          </article>
        )
      })}
      <button className='prev' onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button className='next' onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </div>
  )
}
