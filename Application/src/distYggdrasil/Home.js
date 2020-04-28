import Component from './Yggdrasil/Component.js';
import ThemeBox from './ThemeBox.js';

export default class Home extends Component{
	constructor() {
		super()
		this.style = './dist/assets/CSS/home.css'
		this.element = document.createElement('div')
		this.element.id = 'Home'
		this.themeBoxes = []
		this.build()
	}

	build = () => {
		let that = this
		fetch('http://localhost:8000/api/skills/themes')
			.then(data => data.json())
			.then(data => {
				let themes = data.payload.themes
				for (let i = 0, l = themes.length; i < l; i++) {
					let themeBox = new ThemeBox(themes[i])
					that.themeBoxes.push(themeBox)
					that.element.appendChild(themeBox.append())
				}
			})
	}
}