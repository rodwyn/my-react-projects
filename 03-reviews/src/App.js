// import React from 'react';
// import Review from './Review';
// function App() {
//   return <h2>reviews project setup</h2>;
// }

import { Review } from "./Review";

export const App = () => {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>our reviews</h2>
          <div className='underline'></div>
        </div>
        <Review />
      </section>
    </main>
  )
}
