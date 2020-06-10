import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducers = []
const requiredReducers = require.context('./reducers', true, /Reducer\.js$/)
requiredReducers.keys().forEach((fileName) => {
  const reducer = requiredReducers(fileName).default
  const reducerName = fileName.replace('Reducer.js', '').replace(/\.\//, '')
  reducers.push({ [reducerName]: reducer })

})

const middlewares = [thunk]

const appliedMiddleware = process.env.NODE_ENV === 'development'
  ? composeWithDevTools(applyMiddleware(...middlewares))
  : applyMiddleware(...middlewares)

const store = createStore(
  combineReducers(...reducers),
  appliedMiddleware
)

export default store
