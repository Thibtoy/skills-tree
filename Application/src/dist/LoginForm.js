import Form from './Form.js';
import Input from './Input.js';

export default class LoginForm {
	constructor() {
		const inputs = [
			new Input({type: 'text', name: 'username', required: true, placeholder: 'Username'}),
			new Input({type: 'password', name: 'password', required: true, placeholder: 'Password'})
		]

		return new Form(
			{
				url: 'http://localhost:8000/api/user/authenticate',
			}, 
			inputs, 
			'Login'
		);
	}
}