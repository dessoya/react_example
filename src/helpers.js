

import { store } from './store'
import { SETUP_ROUTE } from './actions'

var changeRoute = (route) => {
	return () => {
		store.dispatch({ type: SETUP_ROUTE, route })
	}
}

export { changeRoute }