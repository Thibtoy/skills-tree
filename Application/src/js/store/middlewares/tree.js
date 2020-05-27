import api from '../../utils/api'

export default store => next => action => {
	switch (action.type) {
		case 'FETCH_THEMES': 
			fetchThemesHandler(store)
	}
	return next(action)
}

const fetchThemesHandler = store => {
	store.dispatch({ type: 'TOGGLE_THEMES_IS_LOADING' })
	api.get('/skills/themes')
		.then(response => {
			setTimeout( () => {
				store.dispatch({ type: 'SET_THEMES_COLLECTION', payload: response.data.payload.themes })
				store.dispatch({ type: 'TOGGLE_THEMES_IS_LOADING' })
			}, 2000)
		})
}