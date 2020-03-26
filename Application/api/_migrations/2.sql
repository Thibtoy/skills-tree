INSERT INTO `themes` (name, description)
	VALUES
	(
		'Concevoir et développer des composants d\'interface utilisateur en intégrant les recommandations de sécurité',
		'Afin de satisfaire les besoins des utilisateurs du système d\'information et en suivant dans toutes les étapes
			l’état de l’art de la sécurité informatique, le concepteur développeur développe ou utilise des composants
			logiciels d’interface permettant de saisir des données et de restituer des résultats de traitements logiciels,
			puis à les intégrer. Dans toutes les étapes, il suit les recommandations de la sécurité informatique émises
			par l\'ANSSI.
			À partir de données locales ou distantes, il développe de façon ergonomique les composants d’interface
			utilisateur comportant des formulaires de saisie, des formulaires de résultats s’affichant à l’écran et des
			états destinés à être imprimés.
			Les productions attendues de la part du concepteur développeur sont le dossier de conception des
			composants, le code source documenté, le dossier de tests unitaires, les composants opérationnels et le
			schéma des données utilisées dans le cas où celui-ci n\'est pas fourni.
			Dans l\'étape de conception, il conçoit les maquettes des écrans avec des libellés en langue française ou
			anglaise et prévoit les enchaînements, en respectant les principes de sécurisation des interfaces
			utilisateur. Il prend en compte la charte graphique et les règles d\'accessibilité.
			Dans l\'étape de réalisation, il code avec un langage de programmation objet les interfaces utilisateur.
			Il établit la connexion avec la base de données et formalise les requêtes d\'extraction et de mise à jour en
			s’efforçant de ne pas introduire de vulnérabilité dans le système d’information. Il effectue les tests unitaires
			avec les outils appropriés, dans une double approche fonctionnelle et sécurité. Il fait valider l\'application
			par les utilisateurs.
			Il rédige éventuellement le dossier de conception technique ainsi que la documentation utilisateur de
			l\'application.
			Il installe ou publie l’application en prenant en compte la sécurité des accès.
			Il utilise des outils de maquettage pour réaliser les maquettes d’écran en tenant compte de demandes
			ergonomiques telles qu’une charte graphique. Il dispose d’environnement de développement intégré pour
			coder. Pour les interfaces de type client lourd (desktop) utilisées dans une architecture client/serveur à
			deux niveaux, il utilise un ou des langages de programmation orienté objet, qui peuvent différer selon les
			projets, ainsi que des bibliothèques de composants graphiques et d’objets existants. Pour les interfaces de
			type web, il utilise les langages de balise et de feuille de style ainsi que les langages de scripts client et
			serveur et, éventuellement, les frameworks associés.
			Pour manipuler les données, il utilise un langage de requête qui peut être spécifique au type de données
			accédées.
			Pour effectuer les tests unitaires, il peut s’aider d’outils de tests. Dans le cadre de projet à plusieurs
			développeurs, il utilise des outils collaboratifs de partage de code.
			Il peut jouer un rôle d’animateur dans les méthodologies de développement en approche de type Agile,
			voire encadrer des développeurs juniors.
			Il contribue au suivi du projet, participe aux réunions de projet et aux ateliers de présentations utilisateurs.
			Dans le cadre d’un développement en approche de type Agile, l’activité trouve sa place lors de chaque
			itération du processus de développement. L’utilisateur exprime ses besoins en début de chacune des
			itérations du projet et valide les interfaces à la fin de chaque itération.
			Dans le cycle de vie classique, cette activité se situe en fin du processus d\'informatisation, après avoir
			assuré la conception de l\'application à réaliser. L’utilisateur exprime ses besoins en début de projet et
			valide toutes les interfaces à la fin du projet.
			Dans le cas de la maintenance logicielle, il analyse les problèmes détectés par le client ou ses demandes
			de modifications contractualisées, afin de corriger les problèmes fonctionnels ou les vulnérabilités
			constatés dans le logiciel. Il sollicite l’expertise de communautés de développeurs, de spécialistes sécurité
			et d’éditeurs de logiciels afin de trouver des solutions aux problèmes techniques rencontrés. Il prend en
			compte les enseignements tirés des incidents résolus.
			Il partage avec les autres développeurs du projet, éventuellement en anglais, les éléments techniques des
			composants qu\'il a réalisés.
			Il a la responsabilité des composants qu\'il réalise ou qu\'il intègre, aussi bien au niveau de leur sûreté de
			fonctionnement que de leur sécurité. Les spécifications de l\'application sont obtenues soit à partir d\'un
			dossier de spécifications techniques formalisé, soit à partir d\'un besoin exprimé par l\'utilisateur.
			L\'activité nécessite une station assise prolongée et un travail de façon continue face à des écrans.'
	),
	(
		'Concevoir et développer la persistance des données en intégrant les recommandations de sécurité',
		'Afin d’assurer le stockage et la gestion des données d’un système d’information, le concepteur
			développeur modélise, crée ou adapte une base de données et rédige, le cas échéant, la documentation
			technique associée. Il prend en compte les besoins de sécurité dans toutes les phases du développement.
			Pour automatiser des processus dont les résultats sont destinés aux clients internes ou externes à
			l’entreprise, le concepteur développeur stocke, durablement de grands volumes de données, ou
			temporairement des données massives. Selon le cas, il les manipule et les exploite.
			Dans le cas d\'un Système de Gestion de Bases de Données (SGBD) Relationnel, il définit un schéma
			strict.
			Dans le cas d’un SGBD non relationnel, il peut définir un schéma flexible, dans lequel il n\'est pas
			nécessaire de définir chaque donnée pour chaque entité. Il peut être amené à modéliser, mais sans
			respecter toutes les contraintes, puis à générer une base de données opérationnelle sans suivre toutes les
			étapes induites par le modèle relationnel.
			L’activité se situe dans toutes les étapes du processus de développement des applications stockant des
			données.
			Il utilise des bases de données relationnelles pour leurs propriétés garantissant l\'exécution correcte de
			toutes les transactions ou, en cas d\'échec de celles-ci, le retour d\'une base de données à son état
			antérieur. Dans ce cas, il représente les informations sous forme structurées, décomposables en attributs
			élémentaires et représentables sous forme de tableaux.
			Il utilise des bases de données non relationnelles, appelées aussi NoSql, dans les cas de traitement des
			données à l\'échelle du Web ou dans le cas du Big Data, où les informations ne sont pas structurées, ne se
			décomposent pas aisément en attributs élémentaires par le fait qu’elles sont complexes et variables. Il
			utilise ce type de bases aussi dans le cas d’applications qui exigent des transactions à grande vitesse et
			des taux de réponse rapides, ou bien qui soumettent les données à des analyses complexes en temps réel
			ou quasi-réel. Il peut être amené à utiliser différents types de SGBD NoSQL. En effet, le NoSQL ne
			constitue pas un type particulier de SGBD, mais une appellation qui regroupe des catégories différentes.
			Il dispose d’une méthodologie et d’un outil de modélisation des données. Il prend connaissance des
			spécificités du domaine d\'application et, dans le cadre d\'opérations de maintenance évolutive, il prend en
			compte la base de données existante. Il connaît et applique les bonnes pratiques de sécurité, afin que la
			base de données respecte les critères DICP : Disponibilité, Intégrité, Confidentialité et Preuve.
			Les environnements de développement et de test sont prédéfinis. Le langage de programmation utilisé est
			le langage de script du SGBD utilisé.
			Il est à même d’adapter sa pratique dans le cas où l’application met en œuvre la persistance à l’aide
			d’autres moyens qu’une base de données relationnelles, par exemple dans le cas de bases de données
			NoSQL.
			Il a la responsabilité des schémas et des composants qu\'il réalise, ainsi que de l\'intégrité du contenu de la
			base de test.
			Dans le cas de moyens et de grands projets, il travaille soit au sein d\'une équipe hiérarchisée sous la
			responsabilité d\'un chef de projet, soit en équipe pluridisciplinaire.
			Pour les projets de petite taille, il peut mener en autonomie la conception et le développement de la
			persistance.
			Il peut être amené à travailler avec un administrateur de bases de données pour mettre en place la
			sécurité au niveau du SGBD.
			L’activité nécessite une station assise prolongée et un travail de façon continue face à des écrans.'
	),
	(
		'Concevoir et développer une application multicouche répartie en intégrant les recommandations de sécurité',
		'À partir du cahier des charges de l’application, le concepteur développeur conçoit la solution puis
			développe ou adapte des composants afin de construire une application sécurisée dans cette architecture.
			L\'activité consiste à automatiser des processus d\'entreprise dans une architecture technique et applicative
			multicouche répartie, à partir de composants assemblés ou indépendants fonctionnant sur des serveurs
			distincts et coopérant au travers d’un réseau, en suivant l’état de l’art de la sécurité informatique à toutes
			les étapes.
			Les productions attendues sont la conception de la solution, incluant les cas d\'utilisation et les diagrammes
			de classes, ainsi que le développement de la solution sous la forme d’une architecture applicative
			multicouche répartie s\'appuyant sur les technologies objet à base de composants ou de microservice.
			Le concepteur-développeur fournit les sources des composants réalisés, les jeux d\'essai fonctionnels et
			les jeux d\'essai utilisés pour les tests d\'intégration, l’application opérationnelle et éventuellement la
			documentation associée. Il contribue à l’élaboration du scénario de déploiement.
			Dans l\'étape d\'analyse, le concepteur-développeur recueille ou utilise le cahier des charges de l\'application
			pour établir les cas d\'utilisation avec les scénarios, et les diagrammes de classes. En s’appuyant
			éventuellement sur une analyse de risque de l’entreprise, il identifie les besoins de sécurité propres à
			l’application. Si le client le demande, il prend en compte les principes liés à la l’écoconception de services
			numériques.
			Dans l\'étape de conception technique, le concepteur-développeur définit l\'architecture physique et
			logicielle dans le respect des bonnes pratiques, il base ses choix de conception sur les patrons de
			conception reconnus. Il formalise l’architecture à l’aide de diagrammes adaptés et reconnus par la
			profession. Comme une bonne architecture est le cœur de la sécurité d’une application, il base ses choix
			de conception sur des patrons de sécurité reconnus. Si le client le demande, il prend en compte les
			principes liés à l’écoconception de services numériques appelée aussi conception responsable de services
			numériques.
			Il identifie les composants strictement nécessaires, définit leur implantation dans l\'architecture choisie et
			établit la documentation technique.
			Dans l\'étape de réalisation, le concepteur-développeur développe, intègre et teste les composants des
			couches présentation, métier et persistance des données, en tenant compte de la conception établie, dans
			le respect des bonnes pratiques et des règles du développement sécurisé. Les tests couvrent à la fois les
			aspects fonctionnels, structurels et l’approche sécurité. Ils peuvent être complétés par une analyse
			statique des composants.
			Dans l\'étape de déploiement, le concepteur développeur informatique participe à l\'élaboration de la
			stratégie de déploiement et de sécurité de l’application. Il déploie les composants assemblés ou
			indépendants sur les serveurs de qualification de l’architecture prévue, en prenant en compte la sécurité
			des accès.
			Il dispose de la démarche à suivre, issue du plan qualité et d’un outil de modélisation, et éventuellement
			d’une analyse de risque de l’entreprise.
			Il utilise un outil collaboratif de gestion des itérations de développement et des versions, afin de faciliter le
			développement parallèle des différents composants d’une même application au sein d’une équipe.
			Il peut jouer un rôle d’animateur dans les méthodologies de développement en approche de type Agile,
			voire encadrer des développeurs juniors.
			Il contribue au suivi du projet, participe aux réunions de projet et aux ateliers de présentations utilisateurs.
			Dans le cadre d’un développement en approche de type Agile, l’activité trouve sa place lors de chaque
			itération du processus de développement. L’utilisateur exprime ses besoins en début de chacune des
			itérations du projet et valide les interfaces à la fin de chaque itération.
			Dans le cycle de vie classique, cette activité se situe en fin du processus d\'informatisation, après avoir
			assuré la conception de l\'application à réaliser. L’utilisateur exprime ses besoins en début de projet et
			valide toutes les interfaces à la fin du projet.
			Dans le cas de la maintenance logicielle, il analyse les problèmes détectés par le client ou ses demandes
			de modifications contractualisées, afin de corriger les problèmes fonctionnels ou les vulnérabilités
			constatés dans le logiciel. Il sollicite l’expertise de communautés de développeurs, de spécialistes sécurité
			et d’éditeurs de logiciels afin de trouver des solutions aux problèmes techniques rencontrés. Il prend en
			compte les enseignements tirés des incidents résolus.
			Il partage avec les autres développeurs du projet, éventuellement en anglais, les éléments techniques des
			composants qu\'il a réalisés.
			Il a la responsabilité de l’élaboration des différents schémas de conception, du développement des
			composants qui en sont issus, et de leur intégration. Il tient compte des contraintes de sécurité telles que
			la disponibilité, l’intégrité, la confidentialité et la preuve. Il a en charge la définition des environnements de
			tests et de développement.
			L’activité nécessite une station assise prolongée et un travail de façon continue face à des écrans.'
	);