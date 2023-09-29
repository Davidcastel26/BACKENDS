
-- import a csv file from db 
\copy (SELECT * FROM person LEFT JOIN car ON card.id = person.car_id) TO '/Users/davidcastellanos/Documents/JS/BACKENDS/postgreSQL/beginnersCourse/part5/25-results.csv' DELIMITER ',' CSV HEADER