
import { MODE_SIGNIN } from './../constants'
import { SIGNIN_MODE } from './../actions'

function signinModeReducer(state = MODE_SIGNIN, action) {
	
	switch (action.type) {
		case SIGNIN_MODE:
			return action.mode
		default:
			return state
	}
}

export default signinModeReducer