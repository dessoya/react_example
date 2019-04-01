
import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom'

import { ComponentWithStoreTracking } from './helpers'
// import { store } from './store'
import { APPSTAGE_AUTH, APPSTAGE_INITIAL, APPSTAGE_SIGNIN } from './constants'

import Initial from './components/Initial'
import SignIn from './components/SignIn'
import TopMenu from './components/TopMenu'

const Home = () => (
  <div>
    <h1>Welcome to the Tornadoes Website!</h1>
  </div>
)

/*

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

class App extends ComponentWithStoreTracking {

    getCurrentStateFromStore(state) {
		console.log('app store', state)
        return {
            // route: state.route,
            appStage: state.appStage
        }
    }
        
    render() {

        const { 
            // route, 
            appStage } = this.state;

        return <>{(() => {
            switch(appStage) {
                case APPSTAGE_INITIAL:		return <Initial />
				case APPSTAGE_SIGNIN:		return <SignIn />
				case APPSTAGE_AUTH:			return (<>
                    <TopMenu />
                    <Switch>
                        <Route exact path='/' component={Home}/>
                    </Switch>
                </>)
                default:                  	return <></>
              }
        })()}</>
    } 
}

export default App;
