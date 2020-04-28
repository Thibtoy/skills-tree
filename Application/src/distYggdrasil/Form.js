import Component from './Yggdrasil/Component.js';

export default class Form extends Component{
	constructor(params = new Object(), inputList = new Array(), buttonMessage = 'Ok', handleSubmit = false, handleData = false) {
		let {id, url, method, action, className, style} = params;
		super();
		if (style) this.style = style
		this.attributes = {
			id,
			method,
			action,
			class: (typeof className === 'string')? [className] : className

		}
		this.url = (url)? url : '#';
		this.inputList = inputList;
		this.buttonMessage = buttonMessage;
		this.element = document.createElement('form');

		this.handleSubmit = (handleSubmit)? handleSubmit.bind(this) : this.handleSubmit.bind(this);
		this.handleData = (handleData)? handleData.bind(this) : this.handleData.bind(this);
		this.render();
	}

	render() {
		for (let attribute in this.attributes) {
			let value = this.attributes[attribute];
			if(value && attribute === 'class') {
				value.forEach(classItem => {
					this.element.classList.add(classItem);
				})
			}
			else if(value) element.setAttribute(attribute, value);
		}
		this.inputList.forEach(input => this.element.appendChild(input.append()));
		this.element.appendChild(this.submitButton());
		this.element.addEventListener('submit', this.handleSubmit);
	}

	submitButton() {
		let button = document.createElement('button');
		button.type = 'submit';
		button.innerHTML = this.buttonMessage;
		return button;
	}

	formatBody() {
		let body = new Object();
		this.inputList.forEach(input => {
			body[input.state.name] = input.state.value;
		});
		return JSON.stringify(body);
	}

	handleSubmit(event) {
		event.preventDefault();
		fetch(
			this.url, 
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: this.formatBody()
			}
		).then(data => data.json())
		.then(data => this.handleData(data));
	}

	handleData(data) {
		console.log(data);
	}
}