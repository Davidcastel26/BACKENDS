-- limit, offset and fetch 

-- select the first 10 rows 
SELECT * FROM person LIMIT 10;

SELECT * FROM person OFFSET 5 LIMIT 5; 

SELECT * FROM person OFFSET 5 FETCH FIRST 5 ROW ONLY;
SELECT * FROM person OFFSET 5 FETCH FIRST ROW ONLY;

SELECT * FROM person WHERE country_of_birth = 'China' OR country_of_birth = 'France' OR country_of_birth = 'Brazil';
-- insted of do this we could do this => 
SELECT * FROM person 
WHERE country_of_birth IN ('China','Brazil','Mexico')
ORDER BY country_of_birth;