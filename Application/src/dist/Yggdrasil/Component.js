export default class Component {
	constructor() {
		this.refs = new Object()
	}
	setState() {
		let state;
		try {
			if (arguments.length === 1 && typeof arguments[0] === 'object' && !arguments[0].length) 
				state = arguments[0];

			else if (!state && arguments.length === 2 && typeof arguments[0] === 'string' && typeof arguments[1] === 'string')
				state = {[arguments[0]]: arguments[1]};

			else throw new TypeError(`you're trying to pass invalid arguments to this method, refer to the documentation to see how to use it`);
			
			if (state){
				this.state = {...this.state, ...state};
				//this.element.setAttribute('key', Date.now());
			} 
			this.render();
		}
		catch (e) {
			console.error(e);
		}
	}
  
	setReference(key, element) {
		this.refs[key] = element
	}
	append() {
		this.element.setAttribute('key', Date.now());
		if (this.style) {
			let head = document.getElementsByTagName('HEAD')[0]
			let link = `<link rel="stylesheet" href="${this.style}" />`
			head.innerHTML += link
		}
		return this.element;
	}
}