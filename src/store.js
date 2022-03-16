import { configureStore } from '@reduxjs/toolkit'
import {mainReducer} from './Reducers'
var attackCounter = 0;
export default configureStore({
  reducer: {mainReducer},
  preloadedState: attackCounter
})