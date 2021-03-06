import axios from 'axios'
//import history from '../history'

const ADD_ITEM = 'ADD_ITEM'
const DELETE_ITEM = 'DELETE_ITEM'
const CLEAR_CART = 'CLEAR CART'
const GOT_CART = 'GOT_CART'

const cart = []

const addItem = item => {
  return {
    type: ADD_ITEM,
    item
  }
}

const gotCart = userCart => {
  return {
    type: GOT_CART,
    userCart
  }
}

const clearCart = () => {
  return {
    type: CLEAR_CART
  }
}

export function addToCart(item) {
  return async dispatch => {
    try {
      await axios.put(`/api/cart/${item.id}`)
      dispatch(addItem(item))
      refreshPage()
    } catch (error) {
      dispatch(console.error(error))
    }
  }
}
function refreshPage() {
  window.location.reload(false)
}

export function removeItem(item) {
  return async dispatch => {
    try {
      await axios.delete(`/api/cart/${item.id}/cart`)
      refreshPage()
    } catch (error) {
      dispatch(console.error(error))
    }
  }
}

export function getCart() {
  return async dispatch => {
    try {
      const userCart = await axios.get(`api/users/cart`)
      if (userCart.data !== 'Cart is empty') {
        dispatch(gotCart(userCart.data))
      }
    } catch (error) {
      dispatch(console.error(error))
    }
  }
}
export function checkout() {
  return async dispatch => {
    try {
      await axios.post(`/api/cart/checkout`)
      dispatch(clearCart())
    } catch (error) {
      dispatch(console.error(error))
    }
  }
}

export default function(state = cart, action) {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.item]
    case CLEAR_CART:
      return []
    case GOT_CART:
      return action.userCart
    default:
      return state
  }
}
