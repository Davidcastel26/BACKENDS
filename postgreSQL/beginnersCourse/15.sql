SELECT id, make, model, price FROM car;

SELECT id, make, model, price, price * .10 FROM car;

SELECT id, make, model, price, ROUND(price * .10, 2) FROM car;

SELECT id, make, model, price, ROUND(price * .10, 2), ROUND(price - (price * .10)) FROM car;

-- alias
SELECT id, make, model, price AS original_price, ROUND(price * .10, 2) AS ten_percent, ROUND(price - (price * .10)) AS discount_after_10_percent FROM car;