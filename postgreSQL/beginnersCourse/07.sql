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
SELECT country_of_birth FROM person ORDER BY country_of_birth;