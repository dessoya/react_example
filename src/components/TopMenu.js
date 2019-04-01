
import React from 'react';
import { ComponentWithStoreTracking } from './../helpers'
import api from './../services/api'
import { store } from './../store'
import { APPSTAGE_INITFAIL, APPSTAGE_INITIAL } from './../constants'
import { APP_STAGE } from './../actions'

class TopMenu extends ComponentWithStoreTracking {

	getCurrentStateFromStore(state) {
        return {
        }
	}

    onLogout = async () => {
		var response = await api.logout()
        if(response.ok) {
		    store.dispatch({type: APP_STAGE, stage: APPSTAGE_INITIAL })
        }
        else {
		    store.dispatch({type: APP_STAGE, stage: APPSTAGE_INITFAIL })
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.onLogout}>Logout</button>
            </div>
        )
    }
}

export default TopMenu