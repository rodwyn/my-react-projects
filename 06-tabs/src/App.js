import { useEffect, useState } from 'react';
import { Article } from './Article';
import { ButtonList } from './ButtonList';
import { Loading } from './Loading';

const URL = 'https://course-api.com/react-tabs-project';

export const App = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  
  const onSetValue = (currentIndex) => setValue(currentIndex);

  const fetchJobs = async() => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setJobs(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [])
  
  if (loading) {
    return <Loading />
  }

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <ButtonList jobs={ jobs } value={ value } onSetValue={ onSetValue } />
        <Article { ...jobs[value] }  />
      </div>
      <button type="button" className="btn">
        more info
      </button>
    </section>
  )
}
