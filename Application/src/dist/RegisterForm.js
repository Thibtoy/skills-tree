import Form from './Form.js';
import Input from './Input.js';

export default class RegisterForm {
	constructor() {
		const inputs = [
			new Input({type: 'email', name: 'email', required: true, placeholder: 'Email'}),
			new Input({type: 'text', name: 'firstName', required: true, placeholder: 'First Name'}),
			new Input({type: 'text', name: 'lastName', required: true, placeholder: 'Last Name'}),
			new Input({type: 'password', name: 'password', required: true, placeholder: 'Password'}),
		];

		return new Form(
			{
				style: './dist/assets/CSS/registerForm.css',
				className: 'RegisterForm',
				url: 'http://localhost:8000/api/farmer/register',
			}, 
			inputs, 
			'Register',
			false,
			data => {
				if (data) window.location.reload()
			}
		);
	}
}