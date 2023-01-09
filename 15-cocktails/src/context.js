import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('a')
  const [cocktails, setCocktails] = useState([])

  const fetchDrinks = useCallback( async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}${searchTerm}`)
      const data = await response.json();
      const { drinks } = data.drinks;
 
      if (!drinks) {
        setCocktails([])
        return
      }
      
      const newCocktails = drinks.map((item) => {
        const {
          idDrink,
          strAlcoholic,
          strDrink,
          strDrinkThumb,
          strGlass,
        } = item

        return {
          glass: strGlass,
          id: idDrink,
          image: strDrinkThumb,
          info: strAlcoholic,
          name: strDrink,
        }
      })

      setCocktails(newCocktails)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.error(error)
    }
  },[searchTerm]);

  useEffect(() => {
    fetchDrinks()
  }, [searchTerm,fetchDrinks]);

  return (
    <AppContext.Provider
      value={{ loading,
         cocktails,
         searchTerm,
         setSearchTerm
       }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
