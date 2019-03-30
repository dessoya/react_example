

import { store } from './store'
import { SETUP_ROUTE } from './actions'
import { Component } from 'react';

class ComponentWithStoreTracking extends Component {

    state = this.getCurrentStateFromStore(store.getState())
  
	/*
	// usage
    getCurrentStateFromStore(state) {
        return {
            signinMode: state.signinMode
        }
	}
	*/
    
    updateStateFromStore = () => {
        const currentState = this.getCurrentStateFromStore(store.getState());
        this.setState(currentState);
    }
    
    componentDidMount() {
        this.unsubscribeStore = store.subscribe(this.updateStateFromStore);
    }
    
    componentWillUnmount() {
        this.unsubscribeStore();
	}
}

var changeRoute = (route) => {
	return () => {
		store.dispatch({ type: SETUP_ROUTE, route })
	}
}

var sleep = ms => new Promise((resolve, reject) => {
	setTimeout(() => { resolve() }, ms)
})

export { ComponentWithStoreTracking, changeRoute, sleep }