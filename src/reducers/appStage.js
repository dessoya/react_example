
import { APPSTAGE_INITIAL } from './../constants'
import { APP_STAGE } from './../actions'

function appStageReducer(state = APPSTAGE_INITIAL, action) {
	
	console.log('reducer appStage', action)

	switch (action.type) {
		case APP_STAGE:
			return action.stage
		default:
			return state
	}
}

export default appStageReducer