-- joins 

-- inner join 
SELECT * FROM person
JOIN car ON person.car_id = car.id;

-- expan info 
-- \x

SELECT person.first_name, car.make, car.model, car.price 
FROM person
JOIN car ON person.car_id = car.id;

-- LEFT JOINS 
SELECT * FROM person
LEFT JOIN car ON car.id = person.car_id;

SELECT * FROM person WHERE car_id IS NULL;

SELECT * FROM person
LEFT JOIN car ON car.id = person.car_id
WHERE car.* IS NULL;

-- RIGHT JOINS
-- SELECT * FROM person
