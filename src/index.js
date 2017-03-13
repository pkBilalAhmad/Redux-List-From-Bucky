import React from 'react'
import ReactDOM from 'react-dom'
import Todo from './components/app'
var root = document.getElementById('root')
import { createStore } from "redux"
import { Provider } from "react-redux"
import allReducers from './reducers'

var store = createStore(allReducers)


ReactDOM.render(
  <Provider store={store}>
    <Todo />
  </Provider>
  ,
  root
)