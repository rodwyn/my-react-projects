import React from 'react'

export const NoTours = ({ onFetchTours }) => {
  console.log(onFetchTours);
  return (
    <div className='title'>
      <h2>no tours left</h2>
      <button className='btn' onClick={() => onFetchTours()}>
        refresh
      </button>
    </div>
  )
}
