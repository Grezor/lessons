
 ## GROUP BY :

 La commande GROUP BY est utilisée en SQL pour grouper plusieurs résultats et utiliser une fonction de totaux sur un groupe de résultat. Sur une table qui contient toutes les ventes d’un magasin, il est par exemple possible de liste regrouper les ventes par clients identiques et d’obtenir le coût total des achats pour chaque client


 ``` SQL
 SELECT count(*), SUM(BALANCE), account_holder_id 
 FROM accounts 
 GROUP BY (account_holder_id);
  ```

  - Afficher le nom et prenom de chaque personne et ainsi la somme de ses compte

 ``` SQL
 SELECT fist_name, last_name, sum(balance) 
 FROM accounts as acc 
 JOIN account_holder as ah
 ON acc.account_holder_id = ah.id
 GROUP by acc.account_hoder_id ;
```
 
  - Afficher le nom et prenom de chaque personne ou solde total de chaque personne est négatif

 ```SQL
SELECT fist_name, last_name, sum(balance) as somme
FROM accounts as acc 
JOIN account_holder as ah
ON acc.account_holder_id = ah.id
--  on calcule la somme de la somme, puis on verifie si elle est négative
GROUP BY last_name, last_name HAVING sum(balance) < 0;

-- La condition HAVING en SQL est presque similaire à WHERE à la seule différence que HAVING permet de filtrer en utilisant des fonctions telles que SUM(), COUNT(), AVG(), MIN() ou MAX().

  ```
- Afficher les noms et prénoms des clients qui ont au moins deux comptes dans la banque

 ```SQL
select first_name, last_name 
FROM accounts as acc
JOIN account_holders as ah ON ah.id = acc.account_holder_id
GROUP BY first_name, last_name having count(*) > 1;

  ```

  - afficher les nom et prenom qui ont au moins deux compte.
  
 ```SQL
select count(*) from (select count(*) from accounts as acc
                        JOIN account_holders as ah ON ah.id = acc.account_holder_id
                        group by first_name, last_name having count(*) > 1) as cpt;2;

  ```

  - creation d'une view, accessible depuis une variable
 ```SQL
  CREATE View plus_de_deux_comptes AS
  select count(*) from (select count(*) from accounts as acc
                        JOIN account_holders as ah ON ah.id = acc.account_holder_id
                        group by first_name, last_name having count(*) > 1) as cpt;2;

-- Dans SQL, une vue est une table virtuelle basée sur le jeu de résultats d'une instruction SQL.Une vue contient des lignes et des colonnes, comme un tableau réel. Les zones d'une vue sont des zones d'une ou plusieurs tables réelles de la base de données.Vous pouvez ajouter des fonctions SQL, WHERE et JOIN à une vue et présenter les données comme si elles provenaient d'une seule table.
 ```

     - on affiche le nombre de ligne depuis la view
 ```SQL
  select count(*) from plus_de_deux_comptes;   
   ```

