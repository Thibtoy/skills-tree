export default class Router {
	constructor(parent) {
		this.parent = parent;//La racine du routeur, ici l'instance de notre objet App;
		this.event = new Event('urlChange');//L'event que l'on crée pour surveiller un changement d'url;
		this.views = new Array();
		this.callbacks = new Array();
		this.init();
	}

	init() {
		let that = this;//On réference notre routeur, inaccessible dans les functions que l'on passe aux event listener;
		window.addEventListener('urlChange', function(event) {//On ajoute une fonction pour ce qu'il se passe lors du changement d'url;
			that.parent.treeAlteration();//On demande à notre app de se re-render;
			that.handleCallbacks(event);
		}, false);

		window.onpopstate = function(event) {//On ajoute une fonction sur une action utilisateur de type 'suivant' ou 'précèdent';
			that.parent.treeAlteration();//On demande à notre app de se re-render;
			that.handleCallbacks(event);
		};
	}

	handleCallbacks() {
		if (this.callbacks.length > 0) {
			for (let i = 0, l = this.callbacks.length; i < l; i++) {
				this.callbacks[i](event);
			}
		}
	}

	addCallback(callback) {
		this.callbacks.push(callback);
	}

	link(node) {//node = l'element html sur lequel on veut attacher un lien vers une autre page;
		let that = this;//On réference notre routeur, inaccessible dans les functions que l'on passe aux event listener;
		node.addEventListener('click', function(event) { // On ajoute une fonction lors du click sur l'element html;
			if (!window.location.pathname.match(event.target.id)) {//On regarde si l'url a changée;
				let newPage = new window.URL(window.location.href)//Si oui, on créé un nouvel objet url;
				newPage.pathname = `/${event.target.id}`;//On attribue l'id de l'element html à l'url demandée;
				window.history.pushState({page: event.target.id}, event.target.id, newPage.href);//On l'ajoute à l'objet historique du navigateur;
				window.dispatchEvent(that.event);//On déclenche notre évènement signalant notre changement d'url;
			}
		});
	}

	addView(view) {
		this.views.push(view);
	}
}