import { combineReducers } from 'redux'
import data from './data'
import users from './users'

const allReducers = combineReducers({    
    data,
    users
})
export default allReducers;
