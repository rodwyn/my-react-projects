export const fetchTours = async() => {
    // setLoading(true);

    try {
      const response = await fetch(URL);
      return await response.json();

      // setTours(data);
      // setLoading(false);
    } catch (error) {
      // setLoading(false);
      console.log(error);
    }
  };

  export const removeTour = (id) => {
    // return tours.filter((tour) => tour.id !== id)
    // setTours(newTours)
  }
