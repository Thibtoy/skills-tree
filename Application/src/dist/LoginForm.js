import Form from './Form.js';
import Input from './Input.js';

export default class LoginForm {
	constructor() {
		const inputs = [
			new Input({type: 'email', name: 'email', required: true, placeholder: 'Email'}),
			new Input({type: 'password', name: 'password', required: true, placeholder: 'Password'})
		]

		return new Form(
			{
				style: './dist/assets/CSS/loginForm.css',
				className: 'LoginForm',
				url: 'http://localhost:8000/api/farmer/authenticate',
			}, 
			inputs, 
			'Login',
			false,
			data => {
				if (data) window.location.reload()
			}
		);
	}
}