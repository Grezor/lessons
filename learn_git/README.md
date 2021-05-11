 
<p align="center">
  <a href="https://www.spigotmc.org/resources/4750/">
          <img src="https://img.shields.io/badge/update%2003.10.2019-mise%20a%20jour%20-green" alt="Rating">
  </a>
</p>
## Présentation de git : 
Git est un logiciel de gestion de versions (Version Control System) qui suit l’évolution des fichiers sources et garde les anciennes versions de chacun d’eux sans rien écraser. Cela permet de retrouver les différentes versions d'un fichier ou d'un lot de fichiers connexes et ainsi éviter des problèmes tel que "Qui a modifié le fichier ZaZa, tout fonctionnait hier et aujourd'hui, il y a des bugs !" Avec Git, vous retrouverez sans problème la version qui fonctionnait la veille.

# demarrage :

- ```git init ```: Initailise le repo
- ```git add .``` : ajout de tout les fichiers
- ```git commit -m "le nom du commit" ```: permet d'avoir un nom a notre sauvegarde distant
- ```git commit -am``` : ajout description
- ```git push -u origin master```
- ```git status``` : afficher les noms des fichiers modifiers
- [new commande] - git checkout [le fichier] si on ajoute le nom de fichier ça ignore les modifs
## branch: 
- Avant de crée une nouvelles branche, le master doit etre a jour :
```$ git pull```

- Création d'une branch : 
  ```$ git checkout -b **nom_branch**```

- Changer de branch : 
```$ git checkout **nom_branch**```
  
- Pour envoyer les branches sur le repo : 
```$ git push origin **nom_branch**```

- Pour connaître toutes les branches disponibles :
   ``` git remote show origin```
  

exemple:
```
remote origin
  Fetch URL: https://github.com/Grezor/nom_repo.git
  Push  URL: https://github.com/Grezor/nom_repo.git
  HEAD branch: master
  Remote branches:
    Geoffrey  tracked
    develop   tracked
  Local branches configured for 'git pull':
    Geoffrey  merges with remote Geoffrey
    develop   merges with remote develop
  Local refs configured for 'git push':
    Geoffrey  pushes to Geoffrey  (up to date)
  
```

- git lg : affiche un graphique de tout les branches avec les  différents commit.

## Merge :
Le mieux est d'avoir votre copie de travail dans un état propre au moment de basculer de branche.

git merge <nom de la branche>

## cloner : 

git clone <https://github.com/Grezor/Guide-git.git>


## .Gitignore

```
Les fichiers ignorés sont généralement des artefacts de build et des fichiers générés par la machine qui sont dérivés de votre dépôt source ou qui ne devraient pas être commités.
```

<https://gitignore.io/>


## Crée clée ssh  : 
  - ssh-keygen -t rsa -b 4096 -C "email@gmail.com"
  - taper terminal : cat ~/.ssh/id_rsa.pub 
  - la clée va etre afficher
  - copier le la clée et la mettre sur sont compte github 
  - ssh -T git@github.com (fait un test de ssh)
  - git affiche le nom de compte

# fork : 

- git clone [nom-du-projet]
- git remote add upstream [projet-officiel-du-repo]
- git remote -v ( voir origin notre github et upstream le repository fork)
- git branch -a 
 - voir les branches local et global
- git fetch upstream
- git merge upstream/nom-branch









