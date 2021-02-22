## NodeJS :

NodeJs permet d'utiliser le JavaScript coté serveur. Il permet donc de faire du Javascript en dehors du navigateur ! 
Node.Js bénéficie de la puissance de Javascript pour proposer une toute nouvelle facon de développer des sites web dynamiques

## le fonctionnement de node.js :

Node.js offre un environnement coté serveur, qui permet aussi d'utiliser le langage JavaScript pour generer des pages web. Il vient en rempacement de langage coté serveur comme le php, java, ...

Avec nodeJS, on peut crée des applications rapides comme : un serveur chat, un système d'upload ...
Attention, node.Js n'est pas un framework.

## Pourquoi Node.Js est-il rapide ?

NodeJS dispose de deux chose aujourd'hui qui lui permet d'être rapide :

1) le moteur V8, c'est le moteur d'execution ultrarapide de Google chrome. 
2) le modèle non bloquant :  
   - [ ] imaginer un programme dont le role est de telecharger un fichier puis de l'afficher.  
     
     ```md
     Télécharger un fichier
     Afficher le fichier
     Faire autre chose
     ```
     
     les actions sont fait dans l'ordre
     - modèle non bloquant :
       
       ```
       Télécharger un fichier
       Afficher le fichier
       Faire autre chose
       ```
       
       le programme n'exécute plus les lignes dans l'ordres ou elle sont écrite. exemple : les deux telechargement sont lancés en meme temps.

infos : Node.js est monothread