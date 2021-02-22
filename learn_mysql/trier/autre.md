- Trigger : 
```SQL

DROP TRIGGER after_accounts_update;

DELIMITER // 

CREATE TRIGGER after_accounts_update
AFTER UPDATE
ON accounts FOR EACH ROW

BEGIN
DECLARE diff INT;
	SET diff = abs(NEW.balance - OLD.balance);
	IF(diff > 1000) THEN
		INSERT INTO logs (account_id, old_sum, new_sum) values (OLD.id, OLD.balance, NEW.balance);
	END IF;
END 
DELIMITER

 ```

 - exercice: écrire un déclencheur qui, suite à une update sur la table accounts, ajoute une ligne dans la table logs avec tous les champs renseignés, avec la date
```SQL

DROP TRIGGER after_accounts_update;

DELIMITER // 

CREATE TRIGGER after_accounts_update
AFTER UPDATE
ON accounts FOR EACH ROW

BEGIN
	DECLARE f_name VARCHAR(20);
	-- ah/acc (alias)
	-- SET : donne une valeur a f_name
	SET f_name = (SELECT first_name FROM account_holder as ah
					JOIN accounts as acc 
					ON acc.account_holder_id = ah.id
					WHERE OLD.id = acc.id);
				
	-- insertion du first-name
	INSERT INTO logs (account_id, old_sum, new_sum, first_name, date_transaction) values (OLD.id, OLD.balance, NEW.balance, f_name, NOW());

END //
DELIMITER;

```
- Exercice: écrire un trigger qui supprime toutes les lignes de la table logs d'un compte donné suite à la suppression de ce dernier

```SQL

DROP TRIGGER after_accounts_update;

DELIMITER // 

CREATE TRIGGER after_accounts_update
AFTER DELETE
ON accounts FOR EACH ROW

BEGIN
	
	DELETE FROM logs where account.id = OLD.account_id;

END //

DELIMITER;

 ```

 ## agregation :
Les fonctions d’agrégation dans le langage SQL permettent d’effectuer des opérations statistiques sur un ensemble d’enregistrement. Étant données que ces fonctions s’appliquent à plusieurs lignes en même temps, elle permettent des opérations qui servent à récupérer l’enregistrement le plus petit, le plus grand ou bien encore de déterminer la valeur moyenne sur plusieurs enregistrement.

 ```SQL
 SELECT SUM(balance) FROM accounts; 
 ```
- Count : permet de compter le nombre d’enregistrement dans une table. Connaître le nombre de lignes dans une table est très pratique dans de nombreux cas, par exemple pour savoir combien d’utilisateurs sont présents dans une table ou pour connaître le nombre de commentaires sur un article.
```SQL
 SELECT COUNT(*) FROM accounts; 
 ```

 - MAX : permet de retourner la valeur maximale d’une colonne dans un set d’enregistrement. La fonction peut s’appliquée à des données numériques ou alphanumériques. Il est par exemple possible de rechercher le produit le plus cher dans une table d’une boutique en ligne.
```SQL
 SELECT MAX(balance) FROM accounts;
 ```

- MIN : permet de retourner la plus petite valeur d’une colonne sélectionnée. Cette fonction s’applique aussi bien à des données numériques qu’à des données alphanumériques
```SQL
 SELECT MIN(balance) FROM accounts;
 ```

- AVG : permet de calculer une valeur moyenne sur un ensemble d’enregistrement de type numérique et non nul.
```SQL
 SELECT AVG(balance) FROM accounts;
 ```
 - Possible de mettre plusieurs agregation a la suite
```SQL
 SELECT AVG(balance), MIN(balance), COUNT(*) as nb FROM accounts;
 ```
 - Afficher le nombre de compte de SUSANNE CANE

```SQL
SELECT COUNT(*) 
FROM accounts as acc 
JOIN account_holder as ah
ON acc.account_holder_id = ah.id
WHERE accounts.first_name = 'SUSANNE' and accounts.last_name = 'CANE';
 ```

 - GROUP BY

```SQL
SELECT count(*), SUM(BALANCE), account_holder_id 
FROM accounts 
GROUP BY (account_holder_id);
 ```
 - Afficher le nom et prenom de chaque personne et ainsi la somme de ses compte

```SQL
SELECT fist_name, last_name, sum(balance) 
FROM accounts as acc 
JOIN account_holder as ah
ON acc.account_holder_id = ah.id
GROUP by acc.account_hoder_id ;
 ```

  - Afficher le nom et prenom de chaque personne et et le solde total de chaque personne

```SQL
SELECT fist_name, last_name, sum(somme)
FROM accounts as acc 
JOIN account_holder as ah
ON acc.account_holder_id = ah.id
GROUP by acc.account_hoder_id;
 ```

## Exercice:

https://sqlzoo.net/wiki/SQL_Tutorial