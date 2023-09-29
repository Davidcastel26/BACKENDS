CREATE TABLE car(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    make VARCHAR(100) NOT NULL,
    model VARCHAR(100) NOT NULL,
    price NUMERIC(19, 2) NOT NULL
);

CREATE TABLE person (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    gender VARCHAR(7) NOT NULL,
    email VARCHAR(100),
    date_of_birth DATE NOT NULL,
    country_of_birth VARCHAR(50) NOT NULL,
    car_id BIGINT REFERENCES car (id),
    UNIQUE(car_id)
);

insert into person (id, first_name, last_name, email, gender, date_of_birth, country_of_birth) values (1, 'Sherman', 'Boothebie', 'sboothebie0@phoca.cz', 'Male', '1093/02/02', 'China');
insert into person (id, first_name, last_name, email, gender, date_of_birth, country_of_birth) values (2, 'Iris', 'Matteotti', 'imatteotti1@army.mil', 'Female', '1083/02/05', 'Poland');
insert into person (id, first_name, last_name, email, gender, date_of_birth, country_of_birth) values (3, 'Archaimbaud', 'Loade', 'davcastellanos@gmai.com', 'Male', '2013/03/22', 'Indonesia');
insert into person (id, first_name, last_name, email, gender, date_of_birth, country_of_birth) values (4, 'Felicle', 'Annott', 'fannott3@elpais.com', 'Female', '2001/05/27', 'Indonesia');
insert into person (id, first_name, last_name, email, gender, date_of_birth, country_of_birth) values (5, 'May', 'Hurdedge', 'mhurdedge4@miibeian.gov.cn', 'Female', '2005/05/05', 'Republic of the Congo');


insert into car (make, model, price) values ('Volkswagen', 'Jetta', '5146.52');
insert into car (make, model, price) values ('Buick', 'Rendezvous', '1387.59');
insert into car (make, model, price) values ('Ford', 'F250', '8684.60');
insert into car (make, model, price) values ('Nissan', 'Sentra', '8097.37');
insert into car (make, model, price) values ('Porsche', '924 S', '5149.09');
