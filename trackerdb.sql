DROP DATABASE IF EXISTS tracker_db;

CREATE DATABASE tracker_db;

USE tracker_db;

--DEPARTMENT TABLE--
CREATE TABLE department (
  id INT AUTO_INCREMENT,
  name VARCHAR(30),
  PRIMARY KEY(id)
);

--ROLE TABLE--
CREATE TABLE role (
  id INT AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary INT,
  department_id INT,
  FOREIGN KEY(department_id) REFERENCES department(id),
  PRIMARY KEY(id)
);

--EMPLOYEE TABLE--
CREATE TABLE employee (
  id INT AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL, 
  last_name VARCHAR(30) NOT NULL, 
  role_id INT,
  manager_id INT,
  FOREIGN KEY(role_id) REFERENCES role(id),
  FOREIGN KEY(manager_id) REFERENCES employee(id),
  PRIMARY KEY(id)
);

--DEPARTMENT VALUES--
INSERT INTO department(name)
VALUES ("Sales"), ("Engineering"), ("Finance"), ("Legal");

--ROLE VALUES--
INSERT INTO role(title, salary, department_id)
VALUES 
("Sales Manager", 100000, 1), 
("Sales Marketing", 120000, 1), 
("Engineer Manager", 200000, 2), 
("Software Engineer", 190000, 2), 
("Finance Manager", 180000, 3), 
("Finance Advisor", 150000, 3), 
("Legal Manager", 160000, 4), 
("Lawyer", 200000, 4);

--EMPLOYEE VALUES--
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES 
("Jane", "Doe", 1, NULL), 
("John", "Doe", 2, 1),
("Justin", "Coo", 2, 1), 
("Taylor", "Huckle", 3, NULL), 
("Joe", "Boy", 4, 4), 
("Ali", "Hue", 4, 4),
("Jack", "Boot", 5, NULL), 
("Oscar", "Leti", 6, 7), 
("Terry", "Kurt", 6, 7),
("Turny", "Bot", 7, NULL), 
("Lisa", "Lozer", 8, 10), 
("Oggie", "Price", 8, 10);


