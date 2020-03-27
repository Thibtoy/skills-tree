import Component from './Yggdrasil/Component.js'

export default class Theme extends Component{
	constructor(theme) {
		super()
		this.style = './dist/assets/CSS/theme.css'
		this.element = document.createElement('div')
		this.element.className = 'Theme'
		this.state = theme
		this.toggleSkillsListVisibility = this.toggleSkillsListVisibility.bind(this)
		this.render()
	}

	render = () => {
		let themeDescription = document.createElement('p'),
			skillsListBtn = document.createElement('img')
		themeDescription.className = 'ThemeDescription'
		themeDescription.innerHTML = this.state.name
		skillsListBtn.className = 'SkillsListBtn'
		skillsListBtn.src = './dist/assets/images/play.svg'
		skillsListBtn.addEventListener('click', this.toggleSkillsListVisibility)
		this.element.appendChild(themeDescription)
		this.element.appendChild(skillsListBtn)
	}

	toggleSkillsListVisibility = (e) => {
		if (this.refs.skills.classList.contains('SkillsListVisible')) 
			this.refs.skills.classList.remove('SkillsListVisible')
		else this.refs.skills.classList.add('SkillsListVisible')
	}
}