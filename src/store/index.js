import { createStore } from 'redux'
import { allTodo } from './reducers'
import { applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
const logger = createLogger()
export const store = createStore(allTodo, applyMiddleware(logger))