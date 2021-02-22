## le DOM : 

- le DOM, signifie Document Objet Model. Une interface de programmation, qui permet de d'accèder aux éléments de la page web. 
- Il faut voir le dom comme un arbre, ou chaque élément peux avoir 0 ou plusieurs enfants, avoir eux meme des enfants. 

## A quoi le dom va servir ?: 

on pourra parcourir le dom, et pouvoir intéragir. on pourra voir quel sont les modiifcation du style, la création ou la suppression d'élements

## accéder au éléments du dom : 
- getElementById(<id>) prend en paramètre l' id  de l'élément que vous recherchez et vous retournera cet élément s'il a été trouvé.
  - la doc : [https://developer.mozilla.org/fr/docs/Web/API/Document/getElementById]
- document.getElementsByClassName()
    - Cette méthode fonctionne de la même manière que la précédente, mais fera sa recherche sur la  class  des éléments et retournera la liste des éléments qui correspondent.
  - https://developer.mozilla.org/fr/docs/Web/API/Document/getElementsByClassName
- document.querySelector(), plus complexe, mais aussi puissante car elle permet de faire des recherche complexe dans le dom.  


## modifiez des classes : 
- add(<string>, [<string>, ...] ) : ajoute la ou les classes spécifiées ;
- remove(<string>, [<string>, ...] ) : supprime la ou les classes spécifiées ;
- contains(<string> ) : vérifie si la classe spécifiée est contenue par cet élément ;
- replace(<old>, <new> ) : remplace l'ancienne classe par la nouvelle classe.

## modifiez les attributs : 
- setAttribute : permet de modifier le type de d'attribut du champs input par exemple : 