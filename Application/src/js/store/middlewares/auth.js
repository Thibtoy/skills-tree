import api, { addAuth } from '../../utils/api'

export default store => next => action => {
	switch (action.type) {
		case 'CONNECTING_AUTH_USER': 
			connectingAuthUser(store, action)
			break

		case 'CONNECTING_AUTH_USER_WITH_COOKIE':
			connectingAuthUserWithCookie(store)
			break 
	}
	return next(action)
}

const connectingAuthUser = (store, action) => {
	store.dispatch({ type: 'TOGGLE_AUTH_IS_LOADING' })
	api
		//use { withCredentials: true } to allow response header to set a cookie, it doesn't work if Allow Origin (back) is set to *
		.post('/farmer/authenticate', action.payload, { withCredentials: true })
        .then(response => {
        	addAuth(response.data)
        	store.dispatch( { type: 'SET_AUTH_TOKEN', payload: response.data })
        })
        .catch(error => console.log(error))
        .finally(() => store.dispatch({ type: 'TOGGLE_AUTH_IS_LOADING' }))
}

const connectingAuthUserWithCookie = (store) => {
	store.dispatch({ type: 'TOGGLE_AUTH_IS_LOADING' })
	api
		.post('/farmer/isAuth', { }, { withCredentials: true })
		.then(response => {
        	addAuth(response.data)
        	store.dispatch( { type: 'SET_AUTH_TOKEN', payload: response.data })
        })
        .catch(error => console.log(error))
        .finally(() => store.dispatch({ type: 'TOGGLE_AUTH_IS_LOADING' }))
}