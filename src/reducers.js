
import { combineReducers } from 'redux'

import changeRouteReducer from './reducers/changeRoute.js'
import appStageReducer from './reducers/appStage.js'
import signinModeReducer from './reducers/signin.js'
import registerForm from './reducers/registerForm'
import signinForm from './reducers/signinForm'

const reducers = combineReducers({
    route: changeRouteReducer,
	appStage: appStageReducer,
	signinMode: signinModeReducer,	
	registerForm,
    signinForm,
})

export default reducers
