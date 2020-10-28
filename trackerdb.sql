
DROP DATABASE IF EXISTS tracker_db;

CREATE DATABASE tracker_db;

USE tracker_db;

CREATE TABLE department (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30)
);

CREATE TABLE role (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id INT UNSIGNED NOT NULL,
  INDEX depart_ind (department_id)
);


CREATE TABLE employee (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL, 
  last_name VARCHAR(30) NOT NULL, 
  role_id INT UNSIGNED NOT NULL,
  INDEX role_ind (role_id),
  manager_id INT UNSIGNED NOT NULL
);

INSERT INTO department(name)
VALUES ("Sales"), ("Engineering"), ("Finance"), ("Legal");

INSERT INTO role(title, salary, department_id)
VALUES 
("Sales Lead", 100000, 1), 
("Sales Marketing", 120000, 1), 
("Engineer Lead", 200000, 2), 
("Software Engineer", 190000, 2), 
("Fianance Head", 180000, 3), 
("Finance Advisor", 150000, 3), 
("Legal Head", 160000, 4), 
("Lawyer", 200000, 4);


INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES 
("Jane", "Doe", 1, 1), 
("John", "Doe", 2, 1),
("Justin", "Coo", 2, 1), 
("Taylor", "Huckle", 3, 2), 
("Joe", "Boy", 4, 2), 
("Ali", "Hue", 4, 2),
("Jack", "Boot", 5, 3), 
("Oscar", "Leti", 6, 3), 
("Terry", "Kurt", 6, 3),
("Turny", "Bot", 7, 4), 
("Lisa", "Lozer", 8, 4), 
("Oggie", "Price", 8, 4);


