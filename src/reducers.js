
import { combineReducers } from 'redux'

import changeRouteReducer from './reducers/changeRoute.js'
import appStageReducer from './reducers/appStage.js'

const reducers = combineReducers({
    route: changeRouteReducer,
    appStage: appStageReducer
})

export default reducers