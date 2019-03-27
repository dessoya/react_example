
import { combineReducers } from 'redux'

import changeRouteReducer from './reducers/changeRoute.js'
import appStageReducer from './reducers/appStage.js'
import signinModeReducer from './reducers/signin.js'

const reducers = combineReducers({
    route: changeRouteReducer,
	appStage: appStageReducer,
	signinMode: signinModeReducer,	
})

export default reducers
