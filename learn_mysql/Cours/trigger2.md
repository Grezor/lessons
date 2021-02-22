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
		INSERT INTO logs (account_id, old_sum, new_sum)
			values (OLD.id, OLD.balance, NEW.balance);
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
	INSERT INTO logs (account_id, old_sum, new_sum, first_name, date_transaction) 
		values (OLD.id, OLD.balance, NEW.balance, f_name, NOW());

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


- trigger learn 2020 : 
```SQL

DELIMITER $$

CREATE TRIGGER after_products_update
AFTER UPDATE 
ON products FOR EACH ROW
	DECLARE fname VARCHAR(20);
BEGIN


    select EXISTS (SELECT prod_id, pro_stock, pro_stock_alert FROM products WHERE pro_stock = NEW.pro_stock)
	
	IF pro_stock >= 5 THEN
	SET pro_stock = NEW.pro_stock
		INSERT INTO commander_articles (codart, qte, date_du_jour)
			values (fname, NEW.pro_stock, NOW())
 	END IF;
END $$ 

DELIMITER;

```
// sauvegarde
```sql
DELIMITER $$

CREATE TRIGGER after_products_update
AFTER UPDATE 
ON products FOR EACH ROW



BEGIN
DECLARE f_name VARCHAR(20);
   SET f_name = (SELECT prod_id, pro_stock, pro_stock_alert FROM products);
    IF NEW.pro_stock < 5 THEN
        INSERT INTO commander_articles (codart, qte, date_du_jour)VALUES (f_name, NEW.pro_stock, NOW());
    END IF;
END $$
 
DELIMITER ;

```
## News Version : 
- fonctionne sans la condition

```sql
DELIMITER $$

CREATE TRIGGER after_products_update
AFTER UPDATE 
ON products FOR EACH ROW

BEGIN
	INSERT INTO commander_articles (codart, qte, date_du_jour)
		VALUES (OLD.pro_id, NEW.pro_stock, NOW());
END $$
 
DELIMITER ;

```
- avec une condition
```SQL
DELIMITER $$

CREATE TRIGGER after_products_update
AFTER UPDATE 
ON products FOR EACH ROW

BEGIN
  IF (NEW.pro_stock <= 5) THEN
    INSERT INTO commander_articles (codart, qte, date_du_jour) 
      VALUES (OLD.pro_id, NEW.pro_stock, NOW());
  END IF;
END $$
 
DELIMITER ;

```

## Amélioration
<details><summary><b>Probleme</b></summary>
<p>

#### explication
Je souhaitais modifier une colonne spécifique, et non une autre colonne. Le trigger se déclenche aussi quand je mets à jour n'importe quelles colonnes dans la table. Puis le trigger ce déclenche, insert dans la table commander_articles.
</p>
</details>


```SQL
DELIMITER $$

CREATE TRIGGER after_products_update
AFTER UPDATE 
ON products FOR EACH ROW

BEGIN
	-- par default l'alerte est 5
	DECLARE pro_stock_alert INT;
	SET pro_stock_alert = 5;
	-- si la nouvelle valeur de pro_stock est différente a l'ancienne valeur
	-- et que la nouvelle valeur, soit inférieur ou égal a 5
  	IF (NEW.pro_stock != OLD.pro_stock) AND (NEW.pro_stock <= pro_stock_alert) THEN
		INSERT INTO commander_articles (codart, qte, date_du_jour) 
		VALUES (OLD.pro_id, NEW.pro_stock, NOW());
  	END IF;
	-- delete
	IF(NEW.pro_stock > 5)
		DELETE FROM commander_articles WHERE OLD.pro_id = pro_id AND NEW.pro_stock > '5'
	END IF;
END $$
 
DELIMITER ;
```