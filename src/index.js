import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import { Provider } from 'react-redux'
import allReducer from './reducers/allReducers'
import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
const logger = createLogger()
const store = createStore(allReducer, applyMiddleware(logger))


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
)