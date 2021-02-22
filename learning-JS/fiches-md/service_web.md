## Qu'est-ce qu'un service web ?

un service web, nous permet d'aller sur google,et de faire des recherches ,aller sur les réseaux sociaux ou bien core la meteo.

- un service web est un programme qui s'éxecute sur un serveur accesible depuis internet et répondant a des demandes, appelées requetes.

un exemple , on fait des requetes pour intéragir avec un service en ligne comme un site ecommerce. 

- A quoi sert une requete ?

les requetes sont des données qui respectent le protocole de communication et qui sont envoyées au serveur.

## qu'est ce que le protocole http ?: 

HTTP signifie HyperText Transfer Protocol. C'est un protocole qui permet de communiquer avec un site internet.

## les codes HTTP: 

lorsque l'on fait une requetes http, cela signifie que l'on demande quelque chose au service web. or il est possible que le service web ne comprenne pas ce que on demande. exemple une page qui n'existe pas. 

- Il existe différent code : 

  - les codes de 100 à 199 sont des codes d'information
  - les codes de 200 à 299 sont des codes a succès, ils veulent dire que tout c'est bien déroulée.
  - les codes de 300 à 399 sont des codes de redirection
  - les codes de 400 à 499 sont des codes d'erreur liées a l'utilisation du service web.
  - les codes 500 à 599 sont des codes d'erreur venant du service web. (plantage)


- 200 : indique que tout s'est bien passé ;
- 201 : indique que tout s'est bien passé et qu'une nouvelle ressource a bien été créée ;
- 204 : indique que tout s'est bien passé mais qu'aucun résultat n'est renvoyé ;
- 400 : indique qu'une requête est erronée ; 
- 401 : indique que l'utilisateur n'est pas authentifié, alors que c'est nécessaire ;
- 403 : indique que l'utilisateur n'a pas le droit d'accéder à cette ressource 
- 404 : indique que la ressource demandée n'existe pas ;
- 500 : indique que le serveur a subi une erreur interne.


# les methodes HTTP :

-  Elle permettent d'identifier le type de requetes que vous souhaitez faire : 

- Get : permet de récuperer des ressources
- Post : permet de crée et de modifier 
- Put : permet de modifier une ressource, comme le nom de l'utilisateur
- Delete : permet de supprimer une ressource, comme un commentaire

## qu'est ce que une api ? 
Il est possible de récupérer ou d'envoyer toutes sortes de données depuis ou vers un service web. 
un service web permet donc de faire toute une série de requetes couvrant les fonctionnalités mis a disposition  par le site web ou application. c'est ce que on appele une API


API signifie Application Programming Interface. Il s'agit d'une interface mettant à disposition des point d'accès vers les ressources de l'application.
