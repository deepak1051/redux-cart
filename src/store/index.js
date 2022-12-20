import { configureStore, createSlice, } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    isLoading: false,
    data: [],
    totalQuantity: 0,
    error: null
  },
  reducers: {
    addToCart(state, action) {
      state.totalQuantity++
      const existProduct = state.data.find(p => p.id === action.payload.id)

      if (!existProduct) {
        state.data.push({
          quantity: 1,
          totalPrice: action.payload.price,
          ...action.payload
        })
      } else {
        existProduct.quantity++
        existProduct.totalPrice = existProduct.totalPrice + action.payload.price
      }

    },
    removeToCart(state, action) {
      state.totalQuantity--

      const findItem = state.data.find(p => p.id === action.payload.id)
      if (findItem.quantity > 1) {
        findItem.quantity--
        findItem.totalPrice = findItem.totalPrice - findItem.price
      } else {
        const filterData = state.data.filter(p => p.id !== action.payload.id)
        state.data = filterData
      }
    },
    resetCart(state, action) {
      state.data = [];
      state.totalQuantity = 0
    }
  }
})

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer
  }
})

export const { addToCart, removeToCart, resetCart } = cartSlice.actions
export { store } 
