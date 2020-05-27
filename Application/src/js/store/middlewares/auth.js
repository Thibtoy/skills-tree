import api, { addAuth } from '../../utils/api'

export default store => next => action => {
	switch (action.type) {
		case 'CONNECTING_AUTH_USER': 
			connectingAuthUser(store, action)
	}
	return next(action)
}

const connectingAuthUser = (store, action) => {
	store.dispatch({ type: 'TOGGLE_AUTH_IS_LOADING' })
	api
		.post('/farmer/authenticate', action.payload)
        .then(response => {
        	addAuth(response.data)
        	store.dispatch( { type: 'SET_AUTH_TOKEN', payload: response.data })
        })
        .catch(error => console.log(error))
        .finally(() => store.dispatch({ type: 'TOGGLE_AUTH_IS_LOADING' }))
}