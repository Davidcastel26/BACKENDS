-- select from tables 
SELECT * FROM person;

-- lenght of the table 
SELECT FROM person;

-- select to values from table
SELECT first_name, last_name FROM person;

--ORDER BY

SELECT * FROM person ORDER BY country_of_birth ASC;

SELECT * FROM person ORDER BY country_of_birth DESC;

SELECT * FROM person ORDER BY id DESC;

SELECT * FROM person ORDER BY id, email;

SELECT country_of_birth FROM person ORDER BY country_of_birth;

-- to get just one time a referance from the search 
SELECT DISTINCT country_of_birth FROM person ORDER BY country_of_birth;

SELECT DISTINCT country_of_birth FROM person ORDER BY country_of_birth DESC;

-- WHERE

SELECT * FROM person WHERE gender = 'Female';

-- OR 
SELECT * FROM person WHERE gender = 'Male' AND (country_of_birth = 'Poland' OR country_of_birth = 'China');

SELECT * FROM person WHERE gender = 'Male' AND (country_of_birth = 'Poland' OR country_of_birth = 'China') AND  last_name = 'Denver';