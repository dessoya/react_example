
import React, { Component } from 'react';
import './initial.css';

/*
import { store } from './store'
import { APPSTAGE_INITIAL } from './actions'
*/

import api from './../services/api'


class Initial extends Component {

    async componentDidMount() {
        var response = await api.authInfo()
        console.log(response)
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