import Component from './Yggdrasil/Component.js';

export default class SkillBox extends Component{
	constructor() {
		super()
		this.style = './dist/assets/CSS/skillBox.css'
		this.element = document.createElement('div')
		this.render()
	}

	render = () => {
		this.element.className = 'SkillBox'
		let row1 = document.createElement('div'),
			row2 = document.createElement('div'),
			skillBoard = document.createElement('div'),
			skillDescription = document.createElement('p'),
			skillLevel = document.createElement('div'),
			skillLink = document.createElement('p'),
			levelImg = document.createElement('img')
		row1.className = 'SkillRow1'
		row2.className = 'SkillRow2'
		skillBoard.className = 'SkillBoard'
		skillLevel.className = 'SkillLevel'
		skillDescription.className = 'SkillDescription'
		skillLink.className = 'SkillLink'
		levelImg.className = 'LevelImg'
		levelImg.src = './dist/assets/images/tree0.png'
		skillDescription.innerHTML = 'yugqouesghgisifhobihuuouo uuhsiovhouh bougbou oushoubou buorboubou bzruobou bzruoboubousf kh bsf khb sb fjb sfjlb sfjb f sjb'
		skillLink.innerHTML = 'Voir Plus'
		skillBoard.appendChild(skillDescription)
		skillLevel.appendChild(levelImg)
		row1.appendChild(skillBoard)
		row1.appendChild(skillLevel)
		row2.appendChild(skillLink)
		this.element.appendChild(row1)
		this.element.appendChild(row2)
	}
}