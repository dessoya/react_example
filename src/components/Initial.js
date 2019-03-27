
import React, { Component } from 'react';
import './initial.css';
import { sleep } from './../helpers'
import api from './../services/api'
import { store } from './../store'
import { APP_STAGE } from './../actions'
import { APPSTAGE_AUTH, APPSTAGE_SIGNIN, APPSTAGE_INITFAIL } from './../constants'

class Initial extends Component {

    async componentDidMount() {
        await sleep(500)
		var response = await api.authInfo()
		// console.log(response)
		if(response.ok) {
			if(response.data.auth) {
				store.dispatch({type: APP_STAGE, stage: APPSTAGE_AUTH })
			}
			else {
				store.dispatch({type: APP_STAGE, stage: APPSTAGE_SIGNIN })
			}
		}
		else {
			store.dispatch({type: APP_STAGE, stage: APPSTAGE_INITFAIL })
		}
    }

	render() {

		return (
            <div className="initial-component">
                <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
        )
    }
}

export default Initial