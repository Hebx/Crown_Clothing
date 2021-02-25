import {combineReducers} from 'redux'
import userReducer from 'redux/user/user.reducer.js'
import cartReducer from 'redux/cart/cart.reducer.js'

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
})
