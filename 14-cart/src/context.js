import React, { useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import { reducer } from './reducer'

const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext();

const initialState = {
  amount: 0,
  cart: cartItems,
  loading: false,
  total: 0,
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const clearCart = () => dispatch({ type: 'CLEAR_CART' });
  
  const decrease = (id) => dispatch({ type: 'DECREASE', payload: id });
  
  const increase = (id) => dispatch({ type: 'INCREASE', payload: id });
  
  const remove = (id) => dispatch({ type: 'REMOVE', payload: id });
  
  const toggleAmount = (id, type) => dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } });

  const fetchData = async () => {
    dispatch({ type: 'LOADING' })

    const response = await fetch(url)
    const cart = await response.json()

    dispatch({ type: 'DISPLAY_ITEMS', payload: cart })
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' })
  }, [state.cart])

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        decrease,
        increase,
        remove,
        toggleAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
