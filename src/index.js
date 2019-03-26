import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'

import './index.css';

import App from './App';

import { HashRouter } from 'react-router-dom'

import { store } from './store'

import history from './history.js';
import { changeRoute } from './helpers'

class LocationListener extends Component {
  
	componentDidMount() {
		changeRoute(history.location.pathname)()
	}
    
	render() {
	  return this.props.children;
	}
  }   


ReactDOM.render((
	<Provider store={store}>
    <HashRouter>
	<LocationListener>
      <App />
	</LocationListener>
    </HashRouter>
	</Provider>
  ), document.getElementById('root'))

