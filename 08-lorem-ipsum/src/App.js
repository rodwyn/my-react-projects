import { useState } from "react";
import { Article } from "./Article";
import data from "./data";

export const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const amount = count <= 0 ? 1 : count > 8 ? 8 : count;
    
    setText(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={ handleSubmit }>
        <label htmlFor="amount">paragraphs:</label>
        <input
          id="amount"
          min="1"
          name="amount"
          onChange={(e) => setCount(e.target.value)}
          type="number"
          value={count}
        />
        <button className="btn">generate</button>
      </form>
      <Article text={ text } />
    </section>
  )
}
