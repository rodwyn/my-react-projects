import { useEffect, useRef } from 'react'
import { useGlobalContext } from '../context';

export const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef('');

  const handleSubmit = (event) => event.preventDefault();
  
  const searchCocktail = () => setSearchTerm(searchValue.current.value);

  useEffect(() => {
    searchValue.current.focus()
  }, [])
  
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input
            type='text'
            name='name'
            id='name'
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  )
}
