-- update info  

UPDATE person SET email = 'dshortlsdaand10@theadftlantic.com' WHERE id = 3;

UPDATE person SET first_name = 'David', last_name = 'Castellanos', email = 'davcastellanoslarios01@gmail.com' WHERE id = 2;

-- conflict 
INSERT INTO person( id, first_name, last_name, gender, email, date_of_birth, country_of_birth)
VALUES (2017, 'Russ', 'Ruddoch', 'Male', 'rruddoch7@hhs.gov', DATE '1952-09-25', 'Norway')
ON CONFLICT (id) DO NOTHING;

-- UPSERT
-- EXCLUDED. variant update existing data if there any change
INSERT INTO person( id, first_name, last_name, gender, email, date_of_birth, country_of_birth)
VALUES (2017, 'Russel', 'Rudi', 'Male', 'rruddoch7@hhs.gov.gt', DATE '1952-09-25', 'Norway')
ON CONFLICT (id) DO UPDATE SET email = EXCLUDED.email, 
last_name = EXCLUDED.last_name, first_name = EXCLUDED.first_name;