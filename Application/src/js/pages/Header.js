import React from 'react'

import { Link } from 'react-router-dom'
import styled from 'styled-components'

import loggedOut from '../../images/loggedOut.svg'

const Header = (props) => {
	const showModale = () => props.setModale({ type: 'login', title: 'Login' })

    return (
        <AppHeader>
        	<h1>Simplon's Skills Farm</h1>
        	<Nav>
                <ul>
                    <li>
                        <CustomLink to="/">Home</CustomLink>
                    </li>
                    {/*<li>
                        <CustomLink to="/login">Login</CustomLink>
                    </li>*/}
                </ul>
            </Nav>
            <LogBtn onClick={ showModale }>
        		<img src={loggedOut} />
        	</LogBtn>
        </AppHeader>
    )
}

export default Header

const AppHeader = styled.header`
	width: 100%;
	height: 60px;
	background-color: rgba(255, 255, 255, 0.65);
	position: fixed;
	top: 0px;
	border-bottom: 1.25px solid rgba(0, 0, 0, 0.3);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	z-index: 10;

	h1 {
		font-size: 28px;
	}
`

const Nav = styled.nav`
	width: 100%;

	ul {
		display: flex;
		align-items: center;
		justify-content: center;

		li {
			display: block;
			margin: 0 20px;
		}
	}
`

const LogBtn = styled.div`
	position: absolute;
	right: 10px;
	box-sizing: border-box;
	background-color: white;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	padding: 5px;
	border: 0.5px solid rgba(0, 0, 0, 0.3);
	cursor: pointer;

	img {
		width: 30px;
		height: 30px;
	}
`

const CustomLink = styled(Link)`

`