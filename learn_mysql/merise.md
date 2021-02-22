## Introduction : 
- qu'est ce que la méthode merise ?
  
Merise est une méthode qui permet de traduire un modèle en une base de données. Cela permet de mieux structurer la structure de la base de données avant de la créer.

## Modèle Conceptuel de données

- Entités : 

Une entité va permettre de modéliser votre première table de base de données. Elle va etre caractérisé par un nom et des propriétés;

- Associations :

Une association est une relation entre deux entités.
Dans notre exemple, l'association permet de relier nos entités "etudiant" et "classe" de la manière suivante :

Un étudiant possède une classe et une classe possédée par un étudiant.
Les associations vont vous permettre de lier les entités entre elles. Et par la suite, de créer les clés étrangère de notre base de données.

- Cardinalités :

Les cardinalités expriment le nombre minimum et maximum de fois où l'entité participe à la relation c'est-à-dire :

La cardinalité de notre entité "Etudiant" est de 1,1 donc au minimum, un étudiant à une classe et au maximum, il a une classe.

Nous dirons souvent que "L'étudiant possède une seule et unique classe".

La cardinalité de notre entité "Classe" est de 1,N donc au minimum une classe contient un élève et au maximum, elle contient N élèves avec N étant un nombre entier positif.

Cardinalités minimales
Une cardinalité minimale est de 0 ou 1 avec 0 signifiant que l'entité ne participe pas à l'association et 1 signifie que l'entité participe à l'association.

Cardinalités maximales
Une cardinalité maximale est de 1 ou N avec N une entier positif. 1 signifie que l'entité ne participe au maximum qu'une seule fois et N, qu'elle participeau maximum un certain nombre de fois.


## liens : 
[more infos](https://www.supinfo.com/articles/single/548-introduction-methode-merise)