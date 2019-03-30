
import React, { Component } from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom'

import { changeRoute } from './helpers'
import { store } from './store'
import { APPSTAGE_AUTH, APPSTAGE_INITIAL, APPSTAGE_SIGNIN } from './constants'

import Initial from './components/Initial'
import SignIn from './components/SignIn'

/*
const Home = () => (
  <div>
    <h1>Welcome to the Tornadoes Website!</h1>
  </div>
)

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
    </Switch>
  </main>
)


class Header extends Component {
  render () {
    return (
  <header>
    <nav>
      <ul>
        <li><div onClick={changeRoute('/')}>Home</div></li>
        <li><div onClick={changeRoute('/roster')}>Roster</div></li>
        <li><div onClick={changeRoute('/roster')}>Roster</div></li>
      </ul>
    </nav>
  </header>
)
    }
}

*/

class App extends Component {

    state = this.getCurrentStateFromStore()
  
    getCurrentStateFromStore() {
		var state = store.getState()
		console.log('app store', state)
        return {
            // route: state.route,
            appStage: state.appStage
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
            // route, 
            appStage } = this.state;

        return <>{(() => {
            switch(appStage) {
                case APPSTAGE_INITIAL:		return <Initial />
				case APPSTAGE_SIGNIN:		return <SignIn />
				case APPSTAGE_AUTH:			return <></>
                default:                  	return <></>
              }
        })()}</>
    } 
}

export default App;
