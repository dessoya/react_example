
import React, { Component } from 'react';
import './initial.css';
import { sleep } from './../helpers'
import api from './../services/api'


class Initial extends Component {

    async componentDidMount() {
        await sleep(2000)
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