import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import board from '../../images/ardoise.png'
import tree0 from '../../images/tree0.png'

const SkillBox = (props) => {
	const visible = props.visible
	const margin = 'boolean' === typeof visible ? (visible ? 10 : props.margin) : 10

	return(
		<Box style={ { marginTop: `${margin}px` } }>
			<FirstRow>
				<SkillBoard>
					<p>
						{ props.skill.name }
					</p>
				</SkillBoard>
				<SkillLevel>
					<img src={ tree0 }/>
				</SkillLevel>
			</FirstRow>
			<SecondRow>
				<a>
					Voir plus
				</a>
			</SecondRow>
		</Box>
	)
}

const Box = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	background-color: rgba(255, 255, 255, 0.7);
	width: 340px;
	padding: 5px 0;
	box-sizing: border-box;
	transition: ease-out margin 1.5s;
`

const FirstRow = styled.div`
	display: flex;
`

const SecondRow = styled.div`
	text-align: center;

	a {
		padding-top: 5px;
	}
`

const SkillBoard = styled.div`
	background-image: url(${board});
	background-size: cover;
	width: 230px;
	height: 170px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 15px;
	box-sizing: border-box;

	p {
		color: white;
		text-align: center;
	}
`

const SkillLevel = styled.div`
	width: 100px;
	display: flex;
	align-items: flex-end;
`

export default SkillBox