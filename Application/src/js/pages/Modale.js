import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Login from './Login'
import Register from './Register'

const Modale = (props) => {
	return (
		<ModaleOut id='OutsideModale' onClick={ props.clickOutside }>
			<ModaleBox>
				{ props.modale.title && 
					<h2>{ props.modale.title }</h2>
				}
				<ModaleContent>
					{ props.modale.type === 'login' && <Login setModale={ props.setModale }/> }
					{ props.modale.type === 'register' && <Register setModale={ props.setModale }/> }
				</ModaleContent>
			</ModaleBox>
		</ModaleOut>
	)
}

const ModaleOut = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(64, 64, 64, 0.45);
	z-index: 11;
`

const ModaleBox = styled.div`
	position: fixed;
	background-color: rgba(255, 255, 255, 0.65);
	border: 1.25px solid rgba(0, 0, 0, 0.3);
	border-radius: 5px;
	box-sizing: border-box;
	padding: calc(100vh/25) calc(100vw/35);
	display: flex;
	flex-direction: column;
	align-items: center;

	h2 {
		font-size = 22px;
	}
`

const ModaleContent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
	flex-grow: 2;
`

export default Modale