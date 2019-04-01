
import { SIGNIN_FORM_SET_ERROR } from '../actions'

function signinForm (state = {}, action) {
    
	switch (action.type) {
		case SIGNIN_FORM_SET_ERROR:
			return {
				...state,
				error: action.error
			}
		default:
		  	return state
	  }
}

export default signinForm