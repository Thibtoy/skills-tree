import Component from './Yggdrasil/Component.js';
import SkillBox from './SkillBox.js';
let data = [
	'yugqouesghgisifhobihuuouo uuhsiovhouh bougbou oushoubou buorboubou bzruobou bzruoboubousf kh bsf khb sb fjb sfjlb sfjb f sjb',
	'yugqouesghgisifhobihuuouo uuhsiovhouh bougbou oushoubou buorboubou bzruobou bzruoboubousf kh bsf khb sb fjb sfjlb sfjb f sjb',
	'yugqouesghgisifhobihuuouo uuhsiovhouh bougbou oushoubou buorboubou bzruobou bzruoboubousf kh bsf khb sb fjb sfjlb sfjb f sjb',
	'yugqouesghgisifhobihuuouo uuhsiovhouh bougbou oushoubou buorboubou bzruobou bzruoboubousf kh bsf khb sb fjb sfjlb sfjb f sjb',
	'yugqouesghgisifhobihuuouo uuhsiovhouh bougbou oushoubou buorboubou bzruobou bzruoboubousf kh bsf khb sb fjb sfjlb sfjb f sjb'
]
export default class Home extends Component{
	constructor() {
		super()
		this.element = document.createElement('div')
		this.element.id = 'Home'
		this.build()
	}

	build = () => {
		this.skillsBox = []
		data.forEach(skill => {
			let skillBox = new SkillBox()
			this.skillsBox.push(skillBox)
			this.element.appendChild(skillBox.append())
		}) 
	}
}