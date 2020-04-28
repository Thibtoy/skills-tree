import Component from './Yggdrasil/Component.js'

export default class Modale extends Component{
	constructor() {
		super()
		this.style = './dist/assets/CSS/modale.css'
		this.element = document.createElement('div')
		this.element.className = 'Modale'
		this.formBox = document.createElement('div')
		this.formBox.className = 'FormBox'
		this.message = document.createElement('p')
		this.message.className = 'ModaleMessage'
		this.state = {
			message: '',
			formBoxChild: document.createElement('div'),
			visible: false
		}
		this.render()
	}

	render = () => {		
		this.message.innerHTML = this.state.message
		if (this.state.visible) this.element.classList.add('ModaleVisible')
		else if (this.element.classList.contains('ModaleVisible')) this.element.classList.remove('ModaleVisible')
		if (this.state.formBoxChild.id && this.state.formBoxChild.id != this.element.getElementsByClassName('FormBox')[0].childNodes[0].id)
			this.formBox.replaceChild(this.state.formBoxChild, this.element.getElementsByClassName('FormBox')[0].childNodes[0])
		else this.formBox.appendChild(this.state.formBoxChild)
		this.element.appendChild(this.message)
		this.element.appendChild(this.formBox)
	}
}