-- group by 
-- get only one country per se 
SELECT DISTINCT country_of_birth FROM person; 

-- get the amount of people there are in the contries 
-- COUNT(*) means in every column
SELECT country_of_birth, COUNT(*) FROM person GROUP BY country_of_birth ORDER BY country_of_birth;

-- Group by having
-- if we need to specify the amout of people that a column needs to have in order to come back with that info
-- we need to use COUNT(*) > 5 
-- we cand use >= and <=
SELECT country_of_birth, COUNT(*) FROM person GROUP BY country_of_birth HAVING COUNT(*) > 5 ORDER BY country_of_birth;

