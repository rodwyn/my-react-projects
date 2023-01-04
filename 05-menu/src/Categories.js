export const Categories = ({ categories, onFilterItems }) => {
  return (
    <div className="btn-container">
      {
        categories.map((category, index) => {
          return (
            <button
              type="button"
              className="filter-btn"
              key={ index }
              onClick={() => onFilterItems(category)}
            >
              { category }
            </button>
          );
        })
      }
    </div>
  )
}
