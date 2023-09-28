-- between 

SELECT * FROM person WHERE date_of_birth BETWEEN DATE '1980-01-01' AND '2015-01-01';

-- like and Ilike  
SELECT * FROM person WHERE email LIKE '%.com';
SELECT * FROM person WHERE email LIKE '%e.com';
SELECT * FROM person WHERE email LIKE '%@google.%';
-- this needs to mathc a single character   
SELECT * FROM person WHERE email LIKE '_____%';

SELECT * FROM person WHERE country_of_birth LIKE 'P%';
SELECT * FROM person WHERE country_of_birth ILIKE 'p%';