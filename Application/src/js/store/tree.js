import { combineReducers } from 'redux'

const initialState = {
	isModalShowing: null,
	themes: {
		isLoading: false,
		collection: []
	}
}

const state = {
	isModalShowing: (state = initialState.isModalShowing, action) => {
		switch (action.type) {
			case 'TOGGLE_IS_MODAL_SHOWING': 
				return action.payload ? action.payload : null
			default:
				return state
		}
	},

	themes: (state = initialState.themes, action) => {
		switch (action.type) {
			case 'TOGGLE_THEMES_IS_LOADING':
				let isLoading = state.isLoading ? false : true
			 	return {...state, isLoading}

			case 'SET_THEMES_COLLECTION':
				let collection = action.payload.map( (theme, i) => ({ ...theme, index: i, openedList: false }) )
				return { ...state, collection } 

			case 'TOGGLE_THEMES_LIST_VISIBILITY':
				let index = action.payload
				let theme = state.collection[index]
				let openedList = theme.openedList ? false : true
				state.collection.splice(index, 1, { ...theme, openedList })

				return { ...state }


			default:
				return state
		}
	}
}

const treeReducer = combineReducers(state)

export default treeReducer