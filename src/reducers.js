
import { combineReducers } from 'redux'
import changeRouteReducer from './reducers/changeRoute.js'

const reducers = combineReducers({
	route: changeRouteReducer
})

export default reducers