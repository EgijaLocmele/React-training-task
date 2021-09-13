import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import shopReducers from './reducers'

const store = createStore(shopReducers, composeWithDevTools())

export default store
