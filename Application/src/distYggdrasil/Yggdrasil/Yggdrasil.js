import Router from './Router.js';

export default class Yggdrasil {
	constructor() {
		this.element = document.getElementById('Yggdrasil');
		this.router = new Router(this);
		this.tree = new Object();
		this.currentPage = new Object();
	}

	use(treeBuilder) {//Fonction utilisée pour déclarer les differents components et routes de notre app
		for (let node in treeBuilder) {
			if (node != 'pages') { //concerne les Headers, Footers, SideBars etc... les components dis 'statiques'
				if (typeof treeBuilder[node].routerCallback === 'function') // Si le component contient une méthode 'routerCallback'
					this.router.addCallback(treeBuilder[node].routerCallback);// On l'ajoute à la pile de fonctions que le router appelleras en changeant d'url
				this.tree[node] = treeBuilder[node];//On ajoute le noeud à l'arborescence du site
			}
			else {// le noeud représente un ensemble de pages
				this.tree[node] = new Array(); // on créé un tableau de noeuds représentants les differentes pages
				for (let page in treeBuilder[node]) {
					this.tree[node].push(treeBuilder[node][page]);// On ajoute chacune des pages à l'arborescence du site
				}
			}
		}
		this.buildTree(this.element);// On construit notre application (la version html) pour la première fois
	}

	buildTree(element, clone = false) {
		for (let node in this.tree) {// pour chaque noeud au premier étage de notre arborescence
			if (node != 'pages'){//Si header, footer, sidebar etc..
				if (!clone) {
					let child = this.tree[node].append() 
					element.appendChild(child) 
					this.currentPage[node] = this.tree[node]
				}
				else element.appendChild(this.tree[node].element.cloneNode(true));
			}
			//si ce n'est pas un clonage, on append le noeud de l'arbre sur l'element, sinon on lui append son clone
			else { //le noeud représente un ensemble de pages
				let page = this.buildPageContent();//On utilise la fonction buildPageContent pour obtenir la page en fonction de l'url;
				if (!clone) {
					let child = page.append()
					element.appendChild(child)
					this.currentPage['page'] = page
					}// si ce n'est pas un clonage on append le noeud sur notre element
				else {// Si c'est un clonage 
					(page.element.getAttribute('key'))? element.appendChild(page.append()) : element.appendChild(page.element.cloneNode(true));
					// Si l'element est nouveau dans la page on l'append, sinon on le clone;
				}
			}
		}
	}

	buildPageContent() {
		let path = window.location.pathname;//le lien après le nom de domaine, type '/'' ou '/register'
		let page = this.tree.pages.find(page => page.path === path); //On cherche dans les pages du premier étage de notre arbre, celle qui posséde le path correspondant
		return page.content;// On en retourne le contenu
	}

	treeAlteration() {// Appellée par le router lors des changements d'url
		let copyElement = document.createElement('div'); // On créé une div qui va nous permettre de comparer notre app,
		let element = this.element; //On réference notre app sur une variable locale
		let copyElementArray = new Array();// On créé un tableau dans lequel on va push les noeuds de notre copie (régle un problème d'offset)
		this.buildTree(copyElement, true);// On build notre nouvelle version dans la copie
		for (let i = 0, l = copyElement.children.length; i < l; i++) copyElementArray[i] = copyElement.children[i];// On réference les nouveaux noeuds dans notre tableau
		for(let i = 0, l = copyElementArray.length; i < l; i++) {
			if (!element.children[i]) {// Si l'élément n'existe pas dans notre app
				element.appendChild(copyElementArray[i]); // On l'append
			}
			else if (copyElementArray[i].getAttribute('key') != element.children[i].getAttribute('key')) { //Si il existe mais que sa clée est différente
				element.replaceChild(copyElementArray[i], element.children[i]);// On remplace l'element de notre app par le nouvel element qui est dans notre copie
			}
//########################################################################################################################################################################
	// Il faut maintenant implémenter ce concept en récursif!
		// else 
		// 	treeAlteration(etage inférieur);
		}
	}
}