import React, { useEffect } from 'react'

import styled from 'styled-components'
import ThemeBox from './ThemeBox'
import { useDispatch, useSelector } from 'react-redux'

const Home = (props) => {
	const dispatch = useDispatch()
	const themes = useSelector( state => state.tree.themes)

	useEffect( () => { dispatch({ type: 'FETCH_THEMES' }) }, [])
	
    return (
        <Body>
           { themes.isLoading ?
           		<p>Loading</p>
           		: themes.collection.map( (theme, i) => <ThemeBox key={i} theme={theme} />) 
           	} 
        </Body>
    )
}

const Body = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: flex-start;
	padding: 85px 0 25px 0;
	box-sizing: border-box;
`
//
export default Home;