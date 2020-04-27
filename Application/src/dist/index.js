import Header from './Header.js';
import Home from './Home.js';
import Modale from './Modale.js';
import Yggdrasil from './Yggdrasil/Yggdrasil.js';

class App extends Yggdrasil{
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
