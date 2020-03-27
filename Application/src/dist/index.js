import Header from './Header.js';
import Home from './Home.js';
import Modale from './Modale.js';
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
let appTree = {
	header: new Header(),
	modale: new Modale(),
	pages: [
		{
			name: 'Home', 
			path: '/', 
			content: new Home(),
		}
	],
}

appTree.header.setReference('modale', appTree.modale)

app.use(appTree);
