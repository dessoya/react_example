import React, { Component } from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom'

import { changeRoute } from './hashHistory'

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
      </ul>
    </nav>
  </header>
)
    }
}

class App extends Component {
  render() {
    return (
      <>
      <Header />
      <Main />
    </>
    );
  }
}

export default App;
