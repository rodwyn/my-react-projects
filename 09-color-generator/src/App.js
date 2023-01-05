import { useState } from 'react'
import { ColorList } from './ColorList';
import Values from 'values.js'

export const App = () => {
  const [color, setColor] = useState('#f15025');
  const [error, setError] = useState(false);
  const [colors, setColors] = useState(new Values('#f15025').all(10))

  const handleSubmit = ( event ) => {
    event.preventDefault();

    try {
      const data = new Values(color).all(10);

      setColors( data );
    } catch (error) {
      setError(true);
      console.error(error);
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setColor(event.target.value)
  };

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={ handleSubmit }>
          <div className='formContent'>
            <label htmlFor='color'>Color:</label>
            <input
              className={`${error ? 'error' : null}`}
              onChange={ handleChange }
              type='color'
              value={ color }
              id="color"
            />
            
            <button className='btn' type='submit'>
              submit
            </button>
          </div>
        </form>
      </section>
      <ColorList colors={ colors } />
    </>
  )
}
