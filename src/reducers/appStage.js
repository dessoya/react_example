
import { APPSTAGE_INITIAL, MODE_SIGNIN } from './../constants'
import { APP_STAGE, SIGNIN_MODE } from './../actions'
import { store } from './../store'

function appStageReducer(state = APPSTAGE_INITIAL, action) {
	
	console.log('reducer appStage', action)

	switch (action.type) {
		case APP_STAGE:
			if(action.stage === APPSTAGE_INITIAL) {
				store.dispatch({type: SIGNIN_MODE, mode: MODE_SIGNIN })
			}
			return action.stage
		default:
			return state
	}
}

export default appStageReducer