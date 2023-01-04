export const Button = ({ company, index, value, onSetValue  }) => {
  return (
    <button
      className={ `job-btn ${index === value && 'active-btn'}` }
      onClick={ () => onSetValue(index) }
    >
      { company }
    </button>
  )
}
