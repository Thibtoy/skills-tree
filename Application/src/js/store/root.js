import { combineReducers } from 'redux'
 
import auth from './auth'
import tree from './tree'

const createRootReducer = combineReducers({
	auth,
	tree
})

export default createRootReducer