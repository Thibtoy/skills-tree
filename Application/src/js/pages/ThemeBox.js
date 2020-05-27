import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SkillBox from './SkillBox'
import styled from 'styled-components'
import sign from '../../images/sign.png'
import play from '../../images/play.svg'

const ThemeBox = (props) => {
	const dispatch = useDispatch()
	const visible = useSelector( state => state.tree.themes.collection[props.theme.index].openedList )
	const displaySkillList = () => dispatch({ type: 'TOGGLE_THEMES_LIST_VISIBILITY', payload: props.theme.index })

	const margin = (props.theme.skills.length * -208)

	return (
		<Box>
			<Theme>
				<p>
					{ props.theme.name }
				</p>
				<img className={ visible ? 'visible' : null } onClick={ displaySkillList } src={ play } />
			</Theme>
			<SkillList>
				{ props.theme.skills.map((skill, i) => {
					return (
						(i === 0) ? 
							<SkillBox key={ i } skill={ skill } visible={ visible } margin={ margin }/> 
							: <SkillBox key={ i } skill={ skill }/>
					)
				}) }
			</SkillList>
		</Box>
	)
}

const Box = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const Theme = styled.div`
	display: flex;
	padding: 10px 0px 15px 45px;
	box-sizing: border-box;
	background-image: url(${sign});
	background-size: cover;
	width: 349px;
	height: 170px;
	margin-bottom: 10px;

	p {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 230px;
		text-align: center;
	}

	img {
		width: 25px;
		height: 25px;
		align-self: flex-end;
		transition: ease transform 0.5s;

		&.visible {
			transform: rotate(90deg);
		}
	}
`

const SkillList = styled.div`
	flex-direction: column;
	justify-content: center;
	align-items: center;
	display: flex;
	overflow: hidden;
`

export default ThemeBox;