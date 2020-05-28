import { combineReducers } from 'redux'
 
import auth from './auth'
import tree from './tree'
import app 	from './app'

const createRootReducer = combineReducers({
	app,
	auth,
	tree
})

export default createRootReducer