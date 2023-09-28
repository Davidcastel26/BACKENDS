SELECT * FROM person;


-- validation to only accept a specifict data
ALTER TABLE person ADD CONSTRAINT gender_constraint CHECK (gender = 'Female' OR gender = 'Male');

-- delete by primary key
-- delete all the data in table but keeping the table
DELETE FROM person;

DELETE FROM person WHERE gender = 'Female' AND country_of_birth = 'Nigeria';

DELETE FROM person WHERE gender = 'Agender';