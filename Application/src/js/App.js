import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Header from './pages/Header'
import Modale from './pages/Modale'
import '../css/style.css'
import img from '../images/background.jpg'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'


const App = () => {
	const dispatch = useDispatch()
	const isModalShowing =  useSelector(state => state.tree.isModalShowing)

	const clickOutsideModale = event => {
		if (event.target.id === 'OutsideModale') dispatch({ type: 'TOGGLE_IS_MODAL_SHOWING' })
	}
	
    return (
        <Router>
        	<AppBody>
	            <Header />
	            { isModalShowing && <Modale clickOutside={ clickOutsideModale } /> }
	            <div>
	                <Switch>
	                    <Route exact path="/">
	                        <Home />
	                    </Route>
	                    <Route path="/register">
	                        <Register />
	                    </Route>
	                    <Route path="/login">
	                        <Login />
	                    </Route>
	                </Switch>
	            </div>
            </AppBody>
        </Router>
    )
}

export default App

const AppBody = styled.div`
	background-image: url(${img});
	min-height: 100vh;
	background-size: cover;
	background-position: center;
`