# procedure : 

Question : 
Jamy c'est quoi la différence entre trigger et une procedure ? 


Procédures stockées
Créez la procédure stockée facture qui permet d'afficher les informations nécessaires à une facture en fonction d'un numéro de commande. Cette procédure doit sortir le montant total de la commande.

Pensez à vous renseigner sur les informations légales que doit comporter une facture.

```SQL
SELECT ode_unit_price*ode_quantity - ode_unit_price *  ode_discount/ 100  AS total, ord_id, cus_id, cus_lastname, cus_firstname, ord_cus_id, ord_payment_date, ode_id, ode_quantity, pro_id, pro_price, pro_name, pro_desc, ode_discount, ode_unit_price
    FROM customers
        INNER JOIN orders
            ON cus_id=ord_cus_id
        INNER JOIN orders_details
            ON ord_id = ode_ord_id
        INNER JOIN products
            ON pro_id = ode_pro_id
    WHERE ord_id = '53'
    GROUP BY pro_id
    ORDER BY ord_id
```


## news version : 

```SQL
DELIMITER $$

DROP PROCEDURE IF EXISTS Facture $$
CREATE PROCEDURE Facture(IN p_ord_id INT) 
BEGIN

DECLARE p_TVA INT;
DECLARE ord_id INT;
SET ord_id = p_ord_id;
SET p_TVA = 20;
-- afficher toutes les infos client
SELECT ord_id, cus_id, cus_lastname, cus_firstname, ord_cus_id, ord_payment_date, pro_id, pro_price, pro_name, pro_desc, ode_discount, ode_unit_price
    FROM customers
        LEFT JOIN orders ON cus_id = ord_cus_id 
        LEFT JOIN orders_details ON ord_id = ode_ord_id 
        LEFT JOIN products ON pro_id = ode_pro_id
    WHERE ord_id = p_ord_id; 

SELECT ord_id, ode_ord_id,
    -- tva
    SUM(ode_unit_price * 1.20) AS tva,
    -- prix ht
    SUM(ode_unit_price) as priceHT,
    -- prix tva
    SUM(ode_unit_price) * 1.20 as pricetva,
    -- remise arrondie
    Round(SUM(ode_unit_price) - ode_discount / 100, 2) AS remise2,
    -- arrondie
    Round((ode_unit_price/100*20),1) AS 'TVA',
     ode_discount AS 'RemiseB'    
    FROM orders_details
        LEFT JOIN orders ON ord_id = ode_ord_id
    WHERE ord_id = '54'
    GROUP BY ode_id;
UNION
-- calculer prix final 
SELECT ROUND(SUM(ode_unit_price*20),1) AS 'TVA', 
        SUM(ode_unit_price / 100 * ode_discount) AS 'Remise', 
        ROUND(SUM((ode_unit_price * ode_quantity)) +
        ROUND((ode_unit_price/100 * 20),1) - SUM(ode_unit_price / 100 * ode_discount) AS 'PTTC' 
        FROM orders_details 
        WHERE ode_ord_id = '54'
        GROUP BY ode_id;
        
SELECT ROUND(SUM(ode_unit_price/100*20),1) AS 'TVA', SUM(ode_unit_price/100*ode_discount) AS 'Remise', 
ROUND(SUM((ode_unit_price*ode_quantity))+SUM((ode_unit_price/100*20))-ode_unit_price/100*ode_discount,2) AS 'PTTC' FROM orders_details WHERE ode_ord_id = 54 GROUP BY ode_ord_id

-- 187.308€ sans remise pour le produit 54
SELECT ROUND(SUM(ode_unit_price/100*20),1) AS 'TVA', SUM(ode_unit_price/100*ode_discount) AS 'Remise', 
ROUND(SUM((ode_unit_price*ode_quantity + ode_unit_price/100*ode_discount) )+SUM((ode_unit_price/100*20))-ode_unit_price/100*ode_discount,2) AS 'PTTC' FROM orders_details WHERE ode_ord_id = 54 GROUP BY ode_ord_id
-- 187.308€ sans remise
SELECT ROUND(SUM(ode_unit_price/100*20),1) AS 'TVA', SUM(ode_unit_price/100*ode_discount) AS 'Remise', 
ROUND(SUM((ode_unit_price*ode_quantity + ode_unit_price/100*ode_discount) )+SUM((ode_unit_price/100*20))-ode_unit_price/100*ode_discount,2) AS 'PTTC' FROM orders_details WHERE ode_ord_id = 54 GROUP BY ode_ord_id

-- tva , remise, pttc
-- resultat -29.01
SELECT SUM(ode_unit_price-ode_unit_price*ode_discount/100-(ode_unit_price-ode_unit_price*ode_discount/100)*1.20) AS 'TVA', SUM(ode_unit_price/100*ode_discount) AS 'Remise', SUM(ode_unit_price*ode_quantity - ode_unit_price/100*ode_discount)*1.2 AS 'PTTC' FROM orders_details WHERE ode_ord_id = 54 GROUP BY ode_ord_id

SUM(SUM(ode_unit_price-ode_unit_price)*ode_discount)/100-SUM(ode_unit_price-ode_unit_price*ode_discount/100)*1.20
SUM(ode_unit_price-ode_unit_price*ode_discount/100-(ode_unit_price-ode_unit_price*ode_discount/100)*1.20)
SUM(ode_unit_price-ode_unit_price*ode_discount/100-(ode_unit_price-ode_unit_price*ode_discount/100)*1.20)



END $$
DELIMITER ;
-- pour que la functions s'execute
CALL Facture(53);
```