CREATE TABLE car (
    car_uid UUID NOT NULL PRIMARY KEY,
    make VARCHAR(100) NOT NULL,
	model VARCHAR(100) NOT NULL,
	price VARCHAR(50) NOT NULL
)

CREATE TABLE person (
    person_uid UUID NOT NULL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name varchar(50) NOT NULL,
    gender VARCHAR(7) NOT NULL,
    email VARCHAR(100),
    date_of_birth DATE NOT NULL,
	country_of_birth VARCHAR(50),
    car_uid UUID REFERENCES car(car_uid),
    UNIQUE(car_uid),
    UNIQUE(email)
)

insert into person (person_uid, first_name, last_name, email, gender, date_of_birth, country_of_birth) values (uuid_generate_v4(), 'Sherman', 'Boothebie', 'sboothebie0@phoca.cz', 'Male', '2023/02/02', 'China');
insert into person (person_uid, first_name, last_name, email, gender, date_of_birth, country_of_birth) values (uuid_generate_v4(), 'Iris', 'Matteotti', 'imatteotti1@army.mil', 'Female', '2023/02/05', 'Poland');
insert into person (person_uid, first_name, last_name, email, gender, date_of_birth, country_of_birth) values (uuid_generate_v4(), 'Archaimbaud', 'Loade', null, 'Male', '2023/03/22', 'Indonesia');
insert into person (person_uid, first_name, last_name, email, gender, date_of_birth, country_of_birth) values (uuid_generate_v4(), 'Felicle', 'Annott', 'fannott3@elpais.com', 'Female', '2023/05/27', 'Indonesia');
insert into person (person_uid, first_name, last_name, email, gender, date_of_birth, country_of_birth) values (uuid_generate_v4(), 'May', 'Hurdedge', 'mhurdedge4@miibeian.gov.cn', 'Female', '2023/05/05', 'Republic of the Congo');


insert into car (car_uid, make, model, price) values (uuid_generate_v4(), 'Volkswagen', 'Jetta', '$5146.52');
insert into car (car_uid, make, model, price) values (uuid_generate_v4(), 'Buick', 'Rendezvous', '$1387.59');