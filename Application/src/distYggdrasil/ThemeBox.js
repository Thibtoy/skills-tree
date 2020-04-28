import Component from './Yggdrasil/Component.js'
import Theme from './Theme.js'
import SkillBox from './SkillBox.js'

export default class ThemeBox extends Component{
	constructor(theme) {
		super()
		this.style = './dist/assets/CSS/themeBox.css'
		this.element = document.createElement('div')
		this.element.className = 'ThemeBox'
		this.theme = new Theme(theme)
		this.skillsList = []
		this.render()
	}

	render = () => {
		let skillsList = document.createElement('div')
		skillsList.className = 'SkillsList SkillsListVisible'

		for (let i = 0, l = this.theme.state.skills.length; i < l; i++) {
			let skillBox = new SkillBox(this.theme.state.skills[i])
			this.skillsList.push(skillBox)
			skillsList.appendChild(skillBox.append())
		}
		this.theme.setReference('skills', skillsList)

		this.element.appendChild(this.theme.append())
		this.element.appendChild(skillsList)
	}
}