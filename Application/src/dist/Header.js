import Component from './Yggdrasil/Component.js'

export default class Header extends Component {
	constructor(ref) {
		super()
		this.ref = ref
		this.state = {
			currentPage: this.routerCallback()
		}
		this.style = './dist/assets/CSS/header.css'
		this.element = document.createElement('div')
		this.routerCallback = this.routerCallback.bind(this)
		this.test = this.test.bind(this)
		this.render()
	}

	render() { 
		this.element.id = 'Header'
		this.element.style.width = '100vw'
		this.element.style.height = '60px'
		this.element.style.display = 'flex'
		this.element.style.alignItems = 'center'
		this.element.style.justifyContent = 'center'
		this.element.innerHTML = 'Simplon\'s Skills Farm'

		let logBtn = document.createElement('div')
		logBtn.id = 'LogBtn'
		logBtn.addEventListener('click', this.test)
		let logImg = document.createElement('img')
		logImg.id = 'LogImg'
		logImg.src = './dist/assets/images/loggedOut.svg'
		logBtn.appendChild(logImg)
		this.element.appendChild(logBtn)
	}

	test = (e) => {
		this.ref.page.LoginForm.inputList[0].element.value = 'thibault'
	}

	routerCallback(event) {
		let currentWay = window.location.pathname.split('/')
		let pathname = (!currentWay[1])? 'Home' : currentWay[1][0].toUpperCase()+currentWay[1].substring(1)
		if (event) this.setState('currentPage', pathname)
		else return pathname
	}
}