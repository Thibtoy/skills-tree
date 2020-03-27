import Component from './Yggdrasil/Component.js'
import LoginForm from './LoginForm.js'
import RegisterForm from './RegisterForm.js'

export default class Header extends Component {
	constructor() {
		super()
		this.state = {
			currentPage: this.routerCallback(),
			showingModale: false
		}
		this.style = './dist/assets/CSS/header.css'
		this.element = document.createElement('div')
		this.routerCallback = this.routerCallback.bind(this)
		this.showLogModale = this.showLogModale.bind(this)
		this.switchForm = this.switchForm.bind(this)
		this.loginForm = new LoginForm()
		this.registerForm = new RegisterForm()
		this.formMessage = document.createElement('p')
		this.formMessageSpan = document.createElement('span')
		this.render()
	}

	render() { 
		this.element.id = 'Header'
		this.element.style.height = '60px'
		this.element.style.display = 'flex'
		this.element.style.alignItems = 'center'
		this.element.style.justifyContent = 'center'
		this.element.innerHTML = 'Simplon\'s Skills Farm'

		this.loginFormElem = document.createElement('div')
		this.loginFormElem.id = 'LoginForm'
		this.formMessage.innerHTML = 'Pas encore membre? '
		this.formMessageSpan.innerHTML = 'Inscrivez vous!'
		this.formMessageSpan.addEventListener('click', this.switchForm)
		this.formMessage.appendChild(this.formMessageSpan)
		this.loginFormElem.appendChild(this.loginForm.append())
		this.loginFormElem.appendChild(this.formMessage)
		this.registerFormElem = this.registerForm.append()
		this.registerFormElem.id = 'RegisterForm'

		let logBtn = document.createElement('div')
		logBtn.id = 'LogBtn'
		logBtn.addEventListener('click', this.showLogModale)
		let logImg = document.createElement('img')
		logImg.id = 'LogImg'
		logBtn.appendChild(logImg)
		this.element.appendChild(logBtn)
		fetch('http://localhost:8000/api/farmer/isAuth')
			.then(data => data.json())
			.then(data => {
				logImg.src = (!data.payload.success)? 
					'./dist/assets/images/loggedOut.svg' : './dist/assets/images/loggedIn.svg'
			})
	}

	showLogModale = () => {
		if (!this.state.showingModale) {
			this.refs.modale.setState({
				message: 'Connectez-vous pour profiter pleinement des fonctionnalités', 
				formBoxChild: this.loginFormElem, 
				visible: true
			})
		}
		else
			this.refs.modale.setState({message: '', visible: false})
		this.state.showingModale = (this.state.showingModale)? false : true
	}

	switchForm = () => {
		this.refs.modale.setState({
			message: 'Inscrivez vous', 
			formBoxChild: this.registerFormElem, 
			visible: true
		})
	}

	routerCallback(event) {
		let currentWay = window.location.pathname.split('/')
		let pathname = (!currentWay[1])? 'Home' : currentWay[1][0].toUpperCase()+currentWay[1].substring(1)
		if (event) this.setState('currentPage', pathname)
		else return pathname
	}
}