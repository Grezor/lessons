## les modules Node.Js et NPM 


Il existe des milliers de modules qui offrent des fonctionnalités variées : de la gestion des fichier upload a la connexion a la base de donnée mysql. 

- NPM : Node Package Manager, l'outils indispensable pour telecharger facilement tout les modes de la communauté nodeJs

## recuperer un module :

```NodeJs
var http = require('http'); // fait appel à http.js
var url = require('url'); // fait appel a url.js
```

- les modules sont de simple fichier.js
- Il ne faut pas mettre de .js dans un require

```
Exemple : 
var test = require('./test'); // fait appel à test.js (dossier parent)
```


## Mettre à jour les modules !
> npm update 

## Déclarer et publier son module :

Quand on l'installe un module avec npm, il crée un fichier package.json dans le meme dossier.

le fichier json contient 3 paires clé-valeur : 

name : c'est le nom de notre application. 
version : c'est le numéro de version de notre application. Il est composé d'une version majeure, de version minerur et de patch.
dependencies : c'est un tableau listant les noms des modules.


le fonctionnement des numéros de versions : 

Pour bien gérer les dépendances et savoir mettre a jour le numéro de version de sont application, il faut savoir comment fonctionnent les numéros de version avec NodeJs? 

- **un numéro de version majeure**: En général on commence à 0 tant que l'application n'est pas considérée comme mature. ce numéro change rarement, uniquement lorque l'application subi des changements très profonds
- **un numéro de version mineure** : ce numéro change à chaque fois que l'application es un peu modifiée.
- **le numéro de path** : ce numéro est changé a chaque petite correction de bug ou de faille. Les fonctionnalités restent les mêmes entre les patchs, il s'agit surtout d'optimisation et de correction de bug indispensables. 


```
    Si je corrige un bug, l'application passera à la version 0.1.1 et il me faudra mettre à jour ce numéro dans le fichier packages.json.

    Si j'améliore significativement mon application, elle passera à la version 0.2.0, puis 0.3.0 et ainsi de suite.

    Le jour où je considère qu'elle a atteint un jalon important, et qu'elle est mature, je pourrai la passer en version 1.0.0.
```

