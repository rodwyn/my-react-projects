import { useEffect, useState } from "react";
import { Tours } from "./Tours";
import { Loading } from "./Loading";
import { NoTours } from "./NoTours";

const URL = 'https://course-api.com/react-tours-project'

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchTours = async() => {
    setLoading(true);

    try {
      const response = await fetch(URL);
      const data = await response.json();

      setTours(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const removeTour = (id) => {
    console.log(id);
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  useEffect(() => {
    fetchTours();
  }, [])
  

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (!tours.length) {
    return (
      <main>
        <NoTours onFetchTours={ fetchTours} />
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} onRemoveTour={removeTour} />
    </main>
  )
}
