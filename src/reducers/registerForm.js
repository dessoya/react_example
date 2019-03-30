
import { REGISTER_FORM_SET_ERROR } from '../actions'

function registerForm (state = {}, action) {
    
	switch (action.type) {
		case REGISTER_FORM_SET_ERROR:
			return {
				...state,
				error: action.error
			}
		default:
		  	return state
	  }
}

export default registerForm