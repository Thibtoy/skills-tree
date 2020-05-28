import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import configureStore from './store/store'

const MOUNT_NODE = document.getElementById('app');

const store = configureStore()
store.dispatch({ type: 'INIT_APP' })

ReactDOM.render(
	<Provider store={ store }>
		<App/>
	</Provider>, MOUNT_NODE)

{/* 
    <div id="app">
        <App>
             <h1>Hello world</h1>
        </App>
    </div> 
*/}

