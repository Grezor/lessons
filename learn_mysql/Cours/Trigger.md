## Introduction : 
Dans MYSQL, un **trigger** ou déclencheur est une commande SQL définie par l'utilisateur qui est automatiquement invoquée
lors d'une opération **INSERT, DELETE, UPDATE**. Le code trigger est associé à une table es est détruit une fois la table
supprimée.

On peux spécifier l'heure de déclenchement de l'action, mais aussi de définir si elle sera activé avant ou après l'évenement.

Les triggers ont plusieurs avantages. Par exemple, vous pouvez les utiliser pour génerer la valeur d'une colonne dérivée
lors d'une instruction INSERT.

On peux utiliser les trigges pour maintenir des règles de validation de la base de données.

## Création des triggers : (structure de base)
```SQL
-- la structure de base
DELIMITER $$

CREATE TRIGGER [TRIGGER_NAME]
[TRIGGER TIME] [TRIGGER EVENT]
AFTER UPDATE 
ON [TABLE] 
FOR EACH ROW
 -- INSTRUCTIONS
END $$

DELIMITER ;

-- [EXPLICATIONS]

-- DELIMITER : Le délimiteur MYSQL par défault est ; -- il est nécessaire de le changer en autre chose afin de MYSQL traites les lignes suivantes comme une seule commande jusqu'a ce qu'il atteigne votre delimiteur. J'ai donc changer le délimiteur en $$

-- TRIGGER NAME : Un trigger doit avoir un nom est c'est la que l'indique la valeur.

-- TRIGGER TIME : Un trigger peux etre invoqué à différents moments. MYSQL vous permet de définir si le trigger démarre avant ou après une opération de la base de données.

```
