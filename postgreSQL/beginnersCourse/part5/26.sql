-- if we are using big serial when we run this comamn we are using the secuance 

SELECT nextval('person_id_seq'::regclass);

select * FROM person_id_seq;

-- next val rests the value
-- being the sequence 10
ALTER SEQUENCE person_id_seq RESTART WITH 10;