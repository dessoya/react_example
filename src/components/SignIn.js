
import React, { Component } from 'react';
import { store } from './../store'
import { MODE_SIGNIN, MODE_REGISTER, APPSTAGE_INITIAL, APPSTAGE_INITFAIL } from './../constants'
import { SIGNIN_MODE, REGISTER_FORM_SET_ERROR, APP_STAGE } from './../actions'
import './SignIn.css';
import { ComponentWithStoreTracking } from './../helpers'
import api from './../services/api'

/*
import { sleep } from './../helpers'
import { APP_STAGE } from './../actions'
*/

class SigninForm extends ComponentWithStoreTracking {

	getCurrentStateFromStore(state) {
        return {
        }
	}
		
	onClickRegister() {
		store.dispatch({type: SIGNIN_MODE, mode: MODE_REGISTER })
	}

	render() {
		return (
			<div className="signin-form">

				<div className="line top">
					<div className="form-name">Simple Messanger</div>
					<div className="link ffr" onClick={this.onClickRegister}>Register</div>
				</div>

				<div className="line error"></div>

				<div className="line">
					<div className="caption">Login</div>
					<div><input autoFocus /></div>
				</div>

				<div className="line">
				<div className="caption">Password</div>
					<div><input type="password" /></div>
				</div>

				<div className="line controls">
					<button className="ffr">Sign in</button>
				</div>

			</div>
		)
	}
}

class RegisterForm extends ComponentWithStoreTracking {

	constructor(...args) {
		super(...args)
		store.dispatch({type:REGISTER_FORM_SET_ERROR,error:''})
	}

	getCurrentStateFromStore(state) {
        return {
			error: state.registerForm.error
        }
    }

	onRegister = () => {
		this.onRegisterAsync()
	}

	async onRegisterAsync() {

		if(this.state.password !== this.state.confirm) {
			store.dispatch({type:REGISTER_FORM_SET_ERROR,error:'Password pair must be equal'})
			return
		}

		store.dispatch({type:REGISTER_FORM_SET_ERROR,error:''})

		var response = await api.register(this.state.login, this.state.email, this.state.password)

		// console.log(response)

		if(!response.ok) {
			store.dispatch({type: APP_STAGE, stage: APPSTAGE_INITFAIL })
			return
		}

		var answer = response.data
		if(answer.ok) {
			store.dispatch({type: APP_STAGE, stage: APPSTAGE_INITIAL })
		}
		else {

			var e = [ ]
			for(var name in answer.errors) {
				if(name === '_errorCount') continue
				if(answer.errors[name].length)
					e.push(`${name}: ${answer.errors[name].join(', ')}`)
			}
			store.dispatch({type:REGISTER_FORM_SET_ERROR,error: e.join('<br>')})

		}

	}

	onClickSignin() {
		store.dispatch({type: SIGNIN_MODE, mode: MODE_SIGNIN })
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value})
	}	

	render() {
		const { 
			error } = this.state;
			
		return (
			<div className="signin-form">

				<div className="line top">
					<div className="form-name">Simple Messanger</div>
					<div className="link ffr" onClick={this.onClickSignin}>Sign in</div>
				</div>

				<div className="line error">{error}</div>

				<div className="line">
					<div className="caption">Login</div>
					<div><input autoFocus name="login" onChange={this.handleChange} /></div>
				</div>

				<div className="line">
					<div className="caption">EMail</div>
					<div><input name="email" onChange={this.handleChange} /></div>
				</div>

				<div className="line">
					<div className="caption">Password</div>
					<div><input type="password" name="password" onChange={this.handleChange} /></div>
				</div>

				<div className="line">
					<div className="caption">Confirm</div>
					<div><input type="password" name="confirm" onChange={this.handleChange} /></div>
				</div>

				<div className="line controls">
					<button onClick={this.onRegister} className="ffr">Register</button>
				</div>

			</div>
		)
	}
}

class SignIn extends ComponentWithStoreTracking {

	constructor(...args) {
		super(...args)
		store.dispatch({type: SIGNIN_MODE, mode: MODE_SIGNIN })
	}

	getCurrentStateFromStore(state) {
        return {
            signinMode: state.signinMode
        }
    }

	render() {

        const { 
            signinMode } = this.state;

        return <div className="signin-wrapper">{(() => {
            switch(signinMode) {
                case MODE_SIGNIN:		return <SigninForm />
				case MODE_REGISTER:		return <RegisterForm />
                default:                return <></>
              }
        })()}</div>
    } 
}

export default SignIn