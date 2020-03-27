import Component from './Yggdrasil/Component.js';

export default class SkillBox extends Component{
	constructor(skill) {
		super()
		this.style = './dist/assets/CSS/skillBox.css'
		this.element = document.createElement('div')
		this.state = skill
		this.render()
	}

	render = () => {
		this.element.className = 'SkillBox'
		let row1 = document.createElement('div'),
			row2 = document.createElement('div'),
			skillBoard = document.createElement('div'),
			skillName = document.createElement('p'),
			skillLevel = document.createElement('div'),
			skillLink = document.createElement('p'),
			levelImg = document.createElement('img')
		row1.className = 'SkillRow1'
		row2.className = 'SkillRow2'
		skillBoard.className = 'SkillBoard'
		skillLevel.className = 'SkillLevel'
		skillName.className = 'SkillName'
		skillLink.className = 'SkillLink'
		levelImg.className = 'LevelImg'
		levelImg.src = `./dist/assets/images/${(this.state.image)? this.state.image : 'tree0'}.png`
		skillName.innerHTML = this.state.name
		skillLink.innerHTML = 'Voir Plus'
		skillBoard.appendChild(skillName)
		skillLevel.appendChild(levelImg)
		row1.appendChild(skillBoard)
		row1.appendChild(skillLevel)
		row2.appendChild(skillLink)
		this.element.appendChild(row1)
		this.element.appendChild(row2)
	}
}