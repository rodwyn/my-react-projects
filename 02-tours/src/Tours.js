import React from 'react'
import { Tour } from './Tour'

export const Tours = ({ tours, onRemoveTour }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <>
        {
          tours.map( tour => <Tour key={tour.id} { ...tour } onRemoveTour={ onRemoveTour } /> )
        }
      </>
    </section>
  )
}
