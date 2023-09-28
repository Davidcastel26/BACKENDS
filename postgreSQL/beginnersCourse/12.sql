-- adding new table and data using mockaroo

-- \i /Users/davidcastellanos/Documents/JS/BACKENDS/postgreSQL/beginnersCourse/13-car.sql

-- Maximum price for a car 
SELECT MAX(price) FROM car;

-- Minimum price for a car  
SELECT MIN(price) FROM car;

-- Average price 
SELECT AVG(price) FROM car;

SELECT ROUND(AVG(price)) FROM car;

-- Get minimun price by make 
SELECT make, model, MIN(price) FROM car GROUP BY make, model;
-- max 
SELECT make, model, MAX(price) FROM car GROUP BY make, model;

SELECT make, AVG(price) FROM car GROUP BY make;

-- SUM 
SELECT SUM(price) FROM car;

SELECT make, SUM(price) FROM car GROUP BY make;