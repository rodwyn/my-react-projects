import { useState, useEffect } from 'react';
import { Article } from './Article';
import persons from './data';

export const App = () => {
  

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <Article persons={ persons } />
    </section>
  )
}
