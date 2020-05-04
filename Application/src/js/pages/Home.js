import React, { useState, useEffect } from 'react'
import api from '../utils/api'
import styled from 'styled-components'
import ThemeBox from './ThemeBox'

const Home = (props) => {
	const [themes, setThemes] = useState([])

	useEffect(() => {
		api.get('/skills/themes')
			.then(response => setThemes(response.data.payload.themes))
	}, [])

	useEffect(() => {
		console.log(themes)
	}, [themes])

    return (
        <Body>
            { themes.map((theme, i) => <ThemeBox key={i} theme={theme} />) }
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

export default Home;