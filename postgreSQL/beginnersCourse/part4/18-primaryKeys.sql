-- primary keys 

SELECT * FROM person LIMIT 1;

-- dropping a constrin
ALTER TABLE person DROP CONSTRAINT person_pkey;

-- adding primary key since dropped
ALTER TABLE person ADD PRIMARY KEY (id)

--deleting a user in the table
DELETE FROM person WHERE id = 1;
 
-- unique constrain
SELECT email, COUNT(*) FROM person GROUP BY email HAVING COUNT(*) > 1;
SELECT * FROM person WHERE email = 'vbyartdc@nhs.uk';
DELETE FROM person WHERE id = 1004;

ALTER TABLE person ADD CONSTRAINT unique_email_address UNIQUE (email);

ALTER TABLE person DROP CONSTRAINT unique_email_address;
-- we let postgresql set the name of the constraint 
ALTER TABLE person ADD UNIQUE (email);

