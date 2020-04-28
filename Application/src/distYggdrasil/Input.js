import Component from './Yggdrasil/Component.js';

export default class Input extends Component {
	constructor(params) {
		let {type, name, placeholder, classList, required, id, value} = params;
		super();
		this.state = {
			type,
			value,
			placeholder,
			name,
			required,
			id,
			class: (classList && typeof classList === 'string')? [classList] : classList
		}
		this.element = document.createElement('input');
		this.handleChange = this.handleChange.bind(this);
		this.render();
	}

	render() {
		for (let key in this.state) {
			let value = this.state[key];
			if(value && key === 'class') {
				value.forEach(classItem => {
					this.element.classList.add(classItem);
				})
			}
			else if(value) this.element.setAttribute(key, value);
		}
		this.element.addEventListener('keyup', this.handleChange)
	}

	handleChange(event) {
		this.setState('value', event.target.value);
	}
}