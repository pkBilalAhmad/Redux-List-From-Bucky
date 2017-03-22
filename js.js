import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger';

const logger = createLogger()
const initState = {
  num: 0,
  list: [],
  name : "Ali"
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state, num: state.num + action.payload,
        list : [...state ,  action.name]
      }
      break;
    case "SUB":
      state = {
        ...state, num: state.num - action.payload
      }
      break;
    default:
  }
  return state
}
const store = createStore(reducer,applyMiddleware(logger))

// store.subscribe(() => {
//   console.log("store updated", store.getState())
// })
store.dispatch({
  type: "ADD",
  payload: 1,
  name : "Bilal"
})
store.dispatch({
  type: "SUB",
  payload: 5,
  name : "Ahmad"
})
