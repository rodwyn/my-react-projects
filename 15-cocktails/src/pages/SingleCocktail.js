import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Loading } from '../components/Loading';

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php';

export const SingleCocktail = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [cocktail, setCocktail] = useState(null)

  const getIngredients = (data) => {
    const ingredients = [];

    

    // return Object.keys(data)
    // .filter( key => key.includes('strIngredient'))
    // .reduce((current, key) => Object.assign(current, { [key]: data[key] }), {});
  };

  const getCocktail = async() => {
    try {
      const response = await fetch(`${BASE_URL}?i=${id}`);
      const data = await response.json();
      const drinks = data.drinks[0];

      if (!drinks) { 
        setCocktail(null)
        return;
      }

      const ingredients = getIngredients(drinks);

      const {
        strDrink: name,
        strDrinkThumb: image,
        strAlcoholic: info,
        strCategory: category,
        strGlass: glass,
        strInstructions: instructions,
      } = drinks;
      
      setCocktail({
        category,
        glass,
        image,
        info,
        ingredients,
        instructions,
        name,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setLoading(true)
    getCocktail()
    setLoading(false)
  }, [id]);

  if (loading) {
    return <Loading />
  }

  if (!cocktail) {
    return <h2 className='section-title'>no cocktail to display</h2>
  }

  const {
    name,
    image,
    category,
    info,
    glass,
    instructions,
    ingredients,
  } = cocktail

  console.log(ingredients);

  return (
    <section className='section cocktail-section'>
        <Link to='/' className='btn btn-primary'>
          back home
        </Link>
        <h2 className='section-title'>{name}</h2>
        <div className='drink'>
          <img src={image} alt={name}></img>
          <div className='drink-info'>
            <p>
              <span className='drink-data'>name :</span> {name}
            </p>
            <p>
              <span className='drink-data'>category :</span> {category}
            </p>
            <p>
              <span className='drink-data'>info :</span> {info}
            </p>
            <p>
              <span className='drink-data'>glass :</span> {glass}
            </p>
            <p>
              <span className='drink-data'>instructons :</span> {instructions}
            </p>
            <p>
              <span className='drink-data'>ingredients :</span>
              {
              // ingredients.map((item, index) => {
              //   return item ? <span key={index}> {item}</span> : null
              // })
              }
            </p>
          </div>
        </div>
      </section>
  )
}
