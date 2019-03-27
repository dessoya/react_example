
import React, { Component } from 'react';
import { store } from './../store'
import { MODE_SIGNIN, MODE_REGISTER } from './../constants'
import { SIGNIN_MODE } from './../actions'
import './SignIn.css';

/*
import { sleep } from './../helpers'
import api from './../services/api'
import { APP_STAGE } from './../actions'
*/

class SigninForm extends Component {
	onClickRegister() {
		store.dispatch({type: SIGNIN_MODE, mode: MODE_REGISTER })
	}
	render() {
		return (
			<div className="signin-form">

				<div className="line top">
					<div>Simple Messanger</div>
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

				<div className="line">
					<button>Sign in</button>
				</div>

			</div>
		)
	}
}

class RegisterForm extends Component {

	onClickSignin() {
		store.dispatch({type: SIGNIN_MODE, mode: MODE_SIGNIN })
	}

	render() {
		return (
			<div className="signin-form">

				<div className="line top">
					<div>Simple Messanger</div>
					<div className="link ffr" onClick={this.onClickSignin}>Sign in</div>
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

				<div className="line">
					<button>Sign in</button>
				</div>

			</div>
		)
	}
}

class SignIn extends Component {

    state = this.getCurrentStateFromStore()
  
    getCurrentStateFromStore() {
		var state = store.getState()
        return {
            signinMode: state.signinMode
        }
    }
    
    updateStateFromStore = () => {
        const currentState = this.getCurrentStateFromStore();
        this.setState(currentState);
    }
    
    componentDidMount() {
        this.unsubscribeStore = store.subscribe(this.updateStateFromStore);
    }
    
    componentWillUnmount() {
        this.unsubscribeStore();
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