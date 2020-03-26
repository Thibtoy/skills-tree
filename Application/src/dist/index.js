import Header from './Header.js';
import Home from './Home.js';
// import RegisterForm from './RegisterForm.js';
import Yggdrasil from './Yggdrasil/Yggdrasil.js';

class App extends Yggdrasil{
	constructor() {
		super();
		this.ancre = {element: document.createElement('div'), append: function() {
			this.element.setAttribute('key', Date.now());
			return this.element;
		}};
		this.ancre.element.id = 'register';
		this.ancre.element.innerHTML = 'register';
		this.router.link(this.ancre.element);
	}
}

const app = new App();
app.use({
			header: new Header(app.currentPage),
			pages: [
				{
					name: 'Home', 
					path: '/', 
					content: new Home(),
				}
			],
			//ancre: app.ancre,
		});