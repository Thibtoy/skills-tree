export default store => next => action => {
	switch (action.type) {
		case 'INIT_APP': 
			initializeApplication(store)
	}
	return next(action)
}

const initializeApplication = (store) => {
	let connectedCookie = document.cookie.split(';').find(cookie => (cookie.startsWith('connected=')))
	if (undefined != connectedCookie) store.dispatch({ type: 'CONNECTING_AUTH_USER_WITH_COOKIE' })
}