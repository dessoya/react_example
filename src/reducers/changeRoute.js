
import { SETUP_ROUTE } from '../actions'
import history from './../history.js';

var changeRoute = (route) => {
    history.push(route)
}

function changeRouteReducer(state = null, action) {
	
	switch (action.type) {
		case SETUP_ROUTE:
			changeRoute(action.route)
		  	return action.route
		default:
		  	return state
	  }
}

export default changeRouteReducer