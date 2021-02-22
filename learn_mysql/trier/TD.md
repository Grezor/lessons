## TD 3 Requêtes SQL : 

Les clés primaires sont en gras et les clés étrangères sont en italique.

- etudiant ( **numero** , nom , prenom , *age* )
- enseignant ( **id** , nom , prenom ) 
- cours ( **sigle** , intitule ,*responsable*, nombreSeances ) 
- seance ( **cours** , numero, type , date , salle , heureDebut , heureFin ,*enseignant*) 
- inscription (**etudiant**, **cours** )

## exercice :
1) Ecrire les requetes de création des tables "Etudiant" et "Séance"
```sql
CREATE TABLE Etudiant (
    numero  varchar(20)     PRIMARY KEY,
    nom     varchar(50)     NOT NULL,
    prenom  varchar(50)     NOT NULL,
    age     int             NOT NULL CHECK(age > 0)
);

```